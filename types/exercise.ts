export type ExerciseType = 
  | 'multiple_choice' 
  | 'sentence_ordering' 
  | 'translation' 
  | 'fill_blank' 
  | 'matching' 
  | 'grammar_choice';

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  question: string;
  explanation: string;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple_choice';
  word: string;
  reading: string;
  choices: string[];
  answer: string;
}

export interface SentenceOrderExercise extends BaseExercise {
  type: 'sentence_ordering';
  prompt: string;
  words: { id: string; text: string; reading: string }[];
  answer: string[]; // array of word ids in correct order
  sentence: string; // full correct japanese sentence
}

export interface TranslationExercise extends BaseExercise {
  type: 'translation';
  prompt: string; // The text to translate
  acceptedAnswers: string[];
}

export interface FillBlankExercise extends BaseExercise {
  type: 'fill_blank';
  sentencePrefix: string;
  sentenceSuffix: string;
  choices: string[];
  answer: string;
  fullSentence: string;
}

export interface MatchingExercise extends BaseExercise {
  type: 'matching';
  pairs: { id: string; left: string; right: string }[];
}

export interface GrammarChoiceExercise extends BaseExercise {
  type: 'grammar_choice';
  sentencePrefix: string;
  sentenceSuffix: string;
  choices: string[];
  answer: string;
  fullSentence: string;
  translation: string;
}

export type Exercise = 
  | MultipleChoiceExercise 
  | SentenceOrderExercise 
  | TranslationExercise 
  | FillBlankExercise 
  | MatchingExercise 
  | GrammarChoiceExercise;
