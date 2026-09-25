// @ts-nocheck
import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const docsDir = path.join(__dirname, '../docs/fpt');
const outputFilePath = path.join(__dirname, '../data/mixed.ts');

const files = [
  'Dekiru_Chukyu_Bai_06_Anki.txt',
  'Dekiru_Chukyu_Bai_07_Anki.txt',
  'Dekiru_Chukyu_Bai_08_Anki.txt',
  'Dekiru_Chukyu_Bai_09_Anki.txt',
  'Dekiru_Chukyu_Bai_10_Anki.txt'
];

interface WordData {
  word: string;
  reading: string;
  meaning: string;
  type?: string;
  examples: {
    ja: string;
    reading: string;
    vi: string;
  }[];
}

const allWords: WordData[] = [];

for (const file of files) {
  const filePath = path.join(docsDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  for (let line of lines) {
    if (line.trim() === '' || line.startsWith('#')) continue;
    
    // Anki export lines are usually Tab separated
    const parts = line.split('\t');
    if (parts.length < 2) continue;
    
    let frontHtml = parts[0];
    let backHtml = parts[1];
    
    // frontHtml is often surrounded by quotes, remove them
    frontHtml = frontHtml.replace(/^"/, '').replace(/"$/, '').replace(/""/g, '"');
    backHtml = backHtml.replace(/^"/, '').replace(/"$/, '').replace(/""/g, '"');
    
    const $front = cheerio.load(frontHtml);
    const word = $front.text().trim();
    if (!word) continue;
    
    const $back = cheerio.load(backHtml);
    
    const reading = $back('span[lang="ja"][style*="font-weight:600"]').first().text().trim();
    
    // finding meaning
    // usually: <b>[Adj-na] <span lang="ja">快適（な）</span></b><br>thoải mái, dễ chịu
    let meaning = '';
    let wordType = '';
    
    $back('b').each((i, el) => {
      const bText = $back(el).text();
      if (bText.startsWith('[')) {
        const match = bText.match(/\[(.*?)\]/);
        if (match) wordType = match[1];
        
        // The meaning is often in the text node right after the <br> that follows the <b> tag
        let nextSibling = el.next;
        if (nextSibling && nextSibling.type === 'text') {
           meaning = $back(nextSibling).text().trim();
        } else if (nextSibling && nextSibling.name === 'br' && nextSibling.next && nextSibling.next.type === 'text') {
           meaning = $back(nextSibling.next).text().trim();
        }
      }
    });

    if (!meaning) {
       // fallback: find a div that contains meaning
       const firstMeaningDiv = $back('div[style*="margin:7px 0"]').first();
       const html = firstMeaningDiv.html() || '';
       const parts = html.split('<br>');
       if (parts.length > 1) {
           meaning = cheerio.load(parts[1]).text().trim();
       }
    }
    
    const examples: any[] = [];
    $back('div[style*="border-left:3px solid #8887"]').each((i, el) => {
      const $el = $back(el);
      const jaSentence = $el.find('div[lang="ja"]').first().text().trim();
      const readingSentence = $el.find('details div[lang="ja"]').first().text().trim();
      const viSentence = $el.find('div[style*="font-size:17px;margin-top:4px"]').first().text().trim();
      
      if (jaSentence) {
        examples.push({
          ja: jaSentence,
          reading: readingSentence,
          vi: viSentence
        });
      }
    });
    
    allWords.push({
      word,
      reading: reading || word,
      meaning: meaning || word,
      type: wordType,
      examples
    });
  }
}

// Generate Exercises
const exercises: any[] = [];
let idCounter = 1;

// Helper to get random distractors
function getDistractors(correctAnswer: string, type: 'meaning' | 'word' | 'reading', count = 3) {
  const distractors = new Set<string>();
  let attempts = 0;
  while (distractors.size < count && attempts < 100) {
    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
    let val = '';
    if (type === 'meaning') val = randomWord.meaning;
    if (type === 'word') val = randomWord.word;
    if (type === 'reading') val = randomWord.reading;
    
    if (val && val !== correctAnswer && !distractors.has(val)) {
      distractors.add(val);
    }
    attempts++;
  }
  const result = Array.from(distractors);
  // Pad with dummy if not enough
  while (result.length < count) {
     result.push('Dummy_' + Math.random().toString(36).substring(7));
  }
  return result;
}

// Shuffle array
function shuffle(array: any[]) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

allWords.forEach(wordData => {
  // 1. Multiple Choice: Guess Meaning
  const distractors = getDistractors(wordData.meaning, 'meaning', 3);
  const choices = shuffle([wordData.meaning, ...distractors]);
  
  exercises.push({
    id: `mc_${idCounter++}`,
    type: 'multiple_choice',
    question: `${wordData.word} có nghĩa là gì?`,
    word: wordData.word,
    reading: wordData.reading,
    choices,
    answer: wordData.meaning,
    explanation: `${wordData.word} (${wordData.reading}): ${wordData.meaning}`
  });

  // 2. Fill Blank & Translation (based on examples)
  wordData.examples.forEach(ex => {
    // Fill Blank: Hide the word in the sentence
    if (ex.ja.includes(wordData.word)) {
      const parts = ex.ja.split(wordData.word);
      if (parts.length === 2) { // Only do this if it appears exactly once and clearly splits
        const fbDistractors = getDistractors(wordData.word, 'word', 3);
        const fbChoices = shuffle([wordData.word, ...fbDistractors]);
        exercises.push({
          id: `fb_${idCounter++}`,
          type: 'fill_blank',
          question: 'Điền vào chỗ trống',
          sentencePrefix: parts[0],
          sentenceSuffix: parts[1],
          choices: fbChoices,
          answer: wordData.word,
          fullSentence: ex.ja,
          explanation: `${ex.ja}\n${ex.vi}\n${wordData.word}: ${wordData.meaning}`
        });
      }
    }
    
    // Translation
    if (ex.ja && ex.vi) {
      exercises.push({
        id: `tr_${idCounter++}`,
        type: 'translation',
        question: 'Dịch sang tiếng Nhật',
        prompt: ex.vi,
        acceptedAnswers: [ex.ja, ex.ja.replace(/。$/, '')],
        explanation: `${ex.ja}\n(${ex.reading})\n${wordData.word}: ${wordData.meaning}`
      });
    }
  });
});

// Group into chunks of Matching Exercises
for (let i = 0; i < allWords.length; i += 4) {
  if (i + 4 <= allWords.length) {
    const pairs = allWords.slice(i, i + 4).map((w, index) => ({
      id: `p${index + 1}`,
      left: w.word,
      right: w.meaning
    }));
    
    exercises.push({
      id: `ma_${idCounter++}`,
      type: 'matching',
      question: 'Ghép từ tiếng Nhật với nghĩa tiếng Việt',
      pairs: pairs,
      explanation: pairs.map(p => `${p.left} (${p.right})`).join(', ')
    });
  }
}

// Generate the output file
const tsCode = `// @ts-nocheck
import { Exercise } from '../types/exercise';

export const mixedExercises = ${JSON.stringify(exercises, null, 2)} as unknown as Exercise[];
`;

fs.writeFileSync(outputFilePath, tsCode, 'utf-8');
console.log(`Successfully generated ${exercises.length} exercises.`);
