import { useState } from 'react';
import { TranslationExercise } from '@/types/exercise';
import FeedbackBlock from './FeedbackBlock';
import clsx from 'clsx';
import { speakJapanese } from '@/lib/speech';

interface Props {
  exercise: TranslationExercise;
  isAnswered: boolean;
  isCorrect: boolean;
  onCheck: (correct: boolean) => void;
  onNext: () => void;
}

export default function Translation({ exercise, isAnswered, isCorrect, onCheck, onNext }: Props) {
  const [answer, setAnswer] = useState('');

  const normalizeString = (str: string) => {
    return str.replace(/[\s。、]/g, '').trim().toLowerCase();
  };

  const handleCheck = () => {
    if (isAnswered) return;
    const normalizedInput = normalizeString(answer);
    const isAnsCorrect = exercise.acceptedAnswers.some(ans => normalizeString(ans) === normalizedInput);
    onCheck(isAnsCorrect);
    if (isAnsCorrect) {
      speakJapanese(exercise.acceptedAnswers[0]);
    }
  };

  return (
    <article className="relative bg-surface-container-lowest border border-outline-variant rounded-lg p-space-md md:p-space-lg shadow-sm">
      <div className="mb-space-md">
        <h1 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
          {exercise.question}
        </h1>
      </div>

      <section className="bg-surface-container-low border border-outline-variant rounded p-space-md mb-space-lg">
        <p className="font-headline-sm text-headline-sm text-on-surface italic font-serif">
          “{exercise.prompt}”
        </p>
      </section>

      <section className="mb-space-lg">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={isAnswered}
          placeholder="Nhập câu trả lời tiếng Nhật..."
          className={clsx(
            "w-full min-h-[120px] p-4 bg-surface border rounded-lg font-body-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-container transition-all",
            isAnswered ? "opacity-70" : "border-outline-variant"
          )}
        />
      </section>

      {!isAnswered ? (
        <div className="flex items-center justify-end pt-space-sm border-t border-outline-variant">
          <button 
            onClick={handleCheck}
            disabled={!answer.trim()}
            className="px-space-xl py-2.5 bg-primary-container hover:bg-primary text-on-primary rounded font-label-md text-label-md tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm active:translate-y-0.5 disabled:opacity-50"
          >
            <span>Kiểm tra</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {!isCorrect && (
            <div className="bg-surface-container p-4 rounded text-on-surface">
              <p className="font-label-sm text-outline-variant uppercase mb-1">Đáp án gợi ý:</p>
              <p className="font-headline-sm">{exercise.acceptedAnswers[0]}</p>
            </div>
          )}
          <FeedbackBlock isCorrect={isCorrect} explanation={exercise.explanation} onNext={onNext} />
        </div>
      )}
    </article>
  );
}
