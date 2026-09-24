import { useState } from 'react';
import { SentenceOrderExercise } from '@/types/exercise';
import { speakJapanese } from '@/lib/speech';
import FeedbackBlock from './FeedbackBlock';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  exercise: SentenceOrderExercise;
  isAnswered: boolean;
  isCorrect: boolean;
  onCheck: (correct: boolean) => void;
  onNext: () => void;
}

export default function SentenceOrder({ exercise, isAnswered, isCorrect, onCheck, onNext }: Props) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelect = (id: string) => {
    if (isAnswered) return;
    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(x => x !== id));
    } else {
      setSelectedIds(prev => [...prev, id]);
      const word = exercise.words.find(w => w.id === id);
      if (word) speakJapanese(word.text);
    }
  };

  const handleCheck = () => {
    if (isAnswered) return;
    const isAnsCorrect = selectedIds.join(',') === exercise.answer.join(',');
    onCheck(isAnsCorrect);
    if (isAnsCorrect) {
      speakJapanese(exercise.sentence);
    }
  };

  const selectedWords = selectedIds.map(id => exercise.words.find(w => w.id === id)!).filter(Boolean);
  const unselectedWords = exercise.words.filter(w => !selectedIds.includes(w.id));

  return (
    <article className="relative bg-surface-container-lowest border border-outline-variant rounded-lg p-space-md md:p-space-lg shadow-sm">
      <div className="mb-space-md pr-12">
        <h1 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
          {exercise.question}
        </h1>
      </div>

      <section className="bg-surface-container-low border border-outline-variant rounded p-space-md mb-space-lg">
        <div className="flex items-center justify-between mb-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Ý nghĩa câu cần ghép:</span>
        </div>
        <p className="font-headline-sm text-headline-sm text-on-surface italic font-serif">
          “{exercise.prompt}”
        </p>
      </section>

      <section className="mb-space-lg">
        <div className="flex items-center justify-between mb-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-primary-container">edit_note</span>
            Khu vực ghép câu:
          </span>
          <button 
            onClick={() => speakJapanese(selectedWords.map(w => w.text).join(' '))}
            className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface transition-colors font-label-sm text-label-sm group"
          >
            <span className="material-symbols-outlined text-[15px] group-hover:text-primary-container transition-colors">volume_up</span>
            <span>Nghe câu hiện tại</span>
          </button>
        </div>
        <div className="relative min-h-[148px] p-space-md bg-surface border border-dashed border-outline-variant rounded-lg flex flex-wrap gap-space-sm items-center content-start transition-colors">
          <AnimatePresence>
            {selectedWords.map((word) => (
              <motion.div
                key={word.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => handleSelect(word.id)}
                className={clsx(
                  "word-chip group flex flex-col items-center justify-center px-space-sm py-1 bg-surface-container-lowest border rounded shadow-sm transition-all select-none",
                  !isAnswered ? "cursor-pointer hover:border-primary-container border-on-surface hover:-translate-y-0.5" : "border-outline-variant"
                )}
              >
                <span className="font-furigana text-furigana text-on-surface-variant leading-tight">{word.reading}</span>
                <div className="flex items-center gap-1">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-serif">{word.text}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className="mb-space-lg pt-space-xs border-t border-outline-variant/70">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-space-sm">
          <AnimatePresence>
            {exercise.words.map((word) => {
              const isSelected = selectedIds.includes(word.id);
              if (isSelected) {
                return (
                  <div key={`ghost-${word.id}`} className="min-h-[52px] rounded border border-dashed border-outline-variant bg-surface-container/40 flex items-center justify-center select-none">
                    <span className="font-stamp text-[10px] text-outline tracking-widest uppercase">ĐÃ CHỌN</span>
                  </div>
                );
              }
              return (
                <motion.div
                  key={word.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => handleSelect(word.id)}
                  className={clsx(
                    "word-chip group flex flex-col items-center justify-center px-space-sm py-1 bg-surface-container-lowest border border-outline-variant rounded hover:border-on-surface transition-all select-none",
                    !isAnswered && "cursor-pointer hover:-translate-y-0.5"
                  )}
                >
                  <span className="font-furigana text-furigana text-on-surface-variant leading-tight">{word.reading}</span>
                  <div className="flex items-center gap-1">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-serif">{word.text}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {!isAnswered ? (
        <div className="flex items-center justify-end pt-space-sm border-t border-outline-variant">
          <button 
            onClick={handleCheck}
            disabled={selectedIds.length !== exercise.words.length}
            className="px-space-xl py-2.5 bg-primary-container hover:bg-primary text-on-primary rounded font-label-md text-label-md tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm active:translate-y-0.5 disabled:opacity-50"
          >
            <span>Kiểm tra</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      ) : (
        <FeedbackBlock isCorrect={isCorrect} explanation={exercise.explanation} onNext={onNext} />
      )}
    </article>
  );
}
