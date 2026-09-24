import { useState } from 'react';
import { MultipleChoiceExercise } from '@/types/exercise';
import { speakJapanese } from '@/lib/speech';
import FeedbackBlock from './FeedbackBlock';
import clsx from 'clsx';

interface Props {
  exercise: MultipleChoiceExercise;
  isAnswered: boolean;
  isCorrect: boolean;
  onCheck: (correct: boolean) => void;
  onNext: () => void;
}

export default function MultipleChoice({ exercise, isAnswered, isCorrect, onCheck, onNext }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showFurigana, setShowFurigana] = useState(true);

  const handleSelect = (choice: string) => {
    if (isAnswered) return;
    setSelected(choice);
  };

  const handleCheck = () => {
    if (!selected || isAnswered) return;
    const correct = selected === exercise.answer;
    onCheck(correct);
    if (correct) {
      speakJapanese(exercise.word);
    }
  };

  const labels = ['A', 'B', 'C', 'D'];

  return (
    <>
      <div className="flex items-center justify-between border-b border-outline-variant pb-2.5 pt-1 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">{exercise.question}</h2>
        </div>
        <button 
          onClick={() => setShowFurigana(!showFurigana)}
          className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary-container transition-colors group"
        >
          <span className="material-symbols-outlined text-[16px]">visibility</span>
          <span className="font-label-sm text-label-sm tracking-wide">Furigana</span>
        </button>
      </div>

      <div className="relative w-full py-8 px-6 bg-surface-container-lowest border border-outline-variant rounded flex flex-col items-center justify-center select-none overflow-hidden mb-6">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{
          backgroundImage: 'linear-gradient(to right, #dfbfbb 1px, transparent 1px), linear-gradient(to bottom, #dfbfbb 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          backgroundPosition: 'center center'
        }}></div>
        <div className="relative z-10 flex flex-col items-center">
          <ruby className="font-kanji-display text-kanji-display text-on-surface tracking-wider leading-none text-center">
            {exercise.word}
            <rt className={clsx("font-furigana text-furigana text-primary-container tracking-widest pb-2 uppercase", !showFurigana && "invisible")}>
              {exercise.reading}
            </rt>
          </ruby>
          <div className="mt-4 flex items-center gap-2.5">
            <button 
              onClick={() => speakJapanese(exercise.word)}
              className="flex items-center gap-1 px-2 py-0.5 text-primary-container hover:bg-primary-fixed/40 transition-colors rounded border border-primary-container/30"
            >
              <span className="material-symbols-outlined text-[16px]">volume_up</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 w-full mb-6">
        {exercise.choices.map((choice, i) => {
          const isSelected = selected === choice;
          const isCorrectAnswer = isAnswered && choice === exercise.answer;
          const isWrongSelected = isAnswered && isSelected && !isCorrectAnswer;

          return (
            <label 
              key={i}
              className={clsx(
                "group relative flex items-center justify-between p-4 bg-surface-container-lowest border-2 rounded cursor-pointer transition-colors shadow-sm",
                isSelected && !isAnswered ? "border-primary-container" : "border-outline-variant/50 hover:border-outline",
                isCorrectAnswer && "border-green-500 bg-green-50",
                isWrongSelected && "border-red-500 bg-red-50"
              )}
            >
              <input 
                type="radio" 
                name="answer" 
                value={choice} 
                className="sr-only"
                checked={isSelected}
                onChange={() => handleSelect(choice)}
                disabled={isAnswered}
              />
              <div className="flex items-center gap-3.5 min-w-0">
                <div className={clsx(
                  "w-7 h-7 shrink-0 rounded flex items-center justify-center font-stamp text-stamp transition-colors",
                  isSelected && !isAnswered ? "bg-primary-container text-on-primary" : "border border-outline-variant bg-surface-container group-hover:border-outline text-on-surface-variant",
                  isCorrectAnswer && "bg-green-500 text-white border-none",
                  isWrongSelected && "bg-red-500 text-white border-none"
                )}>
                  {labels[i]}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate">{choice}</span>
                </div>
              </div>
              {isSelected && !isAnswered && (
                <div className="shrink-0 pl-3">
                  <svg className="w-6 h-6 text-primary-container" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
              )}
              {isCorrectAnswer && (
                <div className="shrink-0 pl-3">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                </div>
              )}
              {isWrongSelected && (
                <div className="shrink-0 pl-3">
                  <span className="material-symbols-outlined text-red-500">cancel</span>
                </div>
              )}
            </label>
          )
        })}
      </div>

      {!isAnswered ? (
        <div className="w-full flex items-center justify-end pt-2 border-t border-outline-variant">
          <button 
            onClick={handleCheck}
            disabled={!selected}
            className="flex items-center gap-2 px-6 py-2 bg-primary-container text-on-primary font-label-md text-label-md font-medium rounded hover:bg-primary transition-all active:translate-y-[1px] disabled:opacity-50"
          >
            <span>Kiểm tra</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      ) : (
        <FeedbackBlock isCorrect={isCorrect} explanation={exercise.explanation} onNext={onNext} />
      )}
    </>
  );
}
