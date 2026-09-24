import { useState } from 'react';
import { GrammarChoiceExercise } from '@/types/exercise';
import FeedbackBlock from './FeedbackBlock';
import clsx from 'clsx';
import { speakJapanese } from '@/lib/speech';

interface Props {
  exercise: GrammarChoiceExercise;
  isAnswered: boolean;
  isCorrect: boolean;
  onCheck: (correct: boolean) => void;
  onNext: () => void;
}

export default function GrammarChoice({ exercise, isAnswered, isCorrect, onCheck, onNext }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleCheck = () => {
    if (isAnswered) return;
    const correct = selected === exercise.answer;
    onCheck(correct);
    if (correct) {
      speakJapanese(exercise.fullSentence);
    }
  };

  return (
    <article className="relative bg-surface-container-lowest border border-outline-variant rounded-lg p-space-md md:p-space-lg shadow-sm">
      <div className="mb-space-md">
        <h1 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
          {exercise.question}
        </h1>
      </div>

      <div className="relative z-10 my-space-md">
        <div className="p-space-md md:p-space-lg bg-surface-container-low rounded-lg mb-space-sm text-center">
          <div className="flex flex-wrap items-baseline justify-center gap-y-3 text-headline-md md:text-headline-lg font-headline-md text-on-surface leading-loose tracking-wide">
            <span>{exercise.sentencePrefix}</span>
            <span className="relative inline-flex items-center justify-center min-w-[100px] px-4 mx-2 py-0.5 bg-surface-container-lowest rounded border-b-2 border-primary-container">
              {selected ? (
                <span className="font-headline-md text-headline-md text-primary font-semibold tracking-wider">{selected}</span>
              ) : (
                <span className="text-outline-variant">＿＿＿</span>
              )}
            </span>
            <span>{exercise.sentenceSuffix}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {exercise.choices.map((choice, i) => (
          <button
            key={i}
            onClick={() => !isAnswered && setSelected(choice)}
            disabled={isAnswered}
            className={clsx(
              "p-4 rounded border-2 font-headline-sm transition-all",
              selected === choice 
                ? "border-primary-container bg-primary-fixed/20 text-primary-container"
                : "border-outline-variant bg-surface hover:border-primary-container text-on-surface"
            )}
          >
            {choice}
          </button>
        ))}
      </div>

      {!isAnswered ? (
        <div className="flex items-center justify-end pt-space-sm border-t border-outline-variant">
          <button 
            onClick={handleCheck}
            disabled={!selected}
            className="px-space-xl py-2.5 bg-primary-container hover:bg-primary text-on-primary rounded font-label-md text-label-md tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm active:translate-y-0.5 disabled:opacity-50"
          >
            <span>Kiểm tra</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="bg-surface-container p-4 rounded text-on-surface flex flex-col gap-2">
            <span className="font-label-sm text-outline-variant uppercase">Dịch nghĩa:</span>
            <span className="font-body-lg italic">{exercise.translation}</span>
          </div>
          <FeedbackBlock isCorrect={isCorrect} explanation={exercise.explanation} onNext={onNext} />
        </div>
      )}
    </article>
  );
}
