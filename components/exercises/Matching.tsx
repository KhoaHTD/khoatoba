import { useState, useEffect } from 'react';
import { MatchingExercise } from '@/types/exercise';
import FeedbackBlock from './FeedbackBlock';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  exercise: MatchingExercise;
  isAnswered: boolean;
  isCorrect: boolean;
  onCheck: (correct: boolean) => void;
  onNext: () => void;
}

export default function Matching({ exercise, isAnswered, isCorrect, onCheck, onNext }: Props) {
  const [leftItems, setLeftItems] = useState<{id: string, text: string}[]>([]);
  const [rightItems, setRightItems] = useState<{id: string, text: string}[]>([]);
  
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [completedPairs, setCompletedPairs] = useState<string[]>([]);
  const [errorPair, setErrorPair] = useState<[string, string] | null>(null);

  useEffect(() => {
    // Shuffle left and right items independently
    const left = exercise.pairs.map(p => ({ id: p.id, text: p.left })).sort(() => Math.random() - 0.5);
    const right = exercise.pairs.map(p => ({ id: p.id, text: p.right })).sort(() => Math.random() - 0.5);
    setLeftItems(left);
    setRightItems(right);
  }, [exercise]);

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      if (selectedLeft === selectedRight) {
        // Match!
        setCompletedPairs(prev => [...prev, selectedLeft]);
        setSelectedLeft(null);
        setSelectedRight(null);
      } else {
        // Mismatch
        setErrorPair([selectedLeft, selectedRight]);
        setTimeout(() => {
          setErrorPair(null);
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 800);
      }
    }
  }, [selectedLeft, selectedRight]);

  useEffect(() => {
    if (completedPairs.length === exercise.pairs.length && completedPairs.length > 0) {
      onCheck(true); // matching is always correct when finished
    }
  }, [completedPairs, exercise.pairs.length, onCheck]);

  return (
    <article className="relative bg-surface-container-lowest border border-outline-variant rounded-lg p-space-md md:p-space-lg shadow-sm">
      <div className="mb-space-md">
        <h1 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
          {exercise.question}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col gap-3">
          {leftItems.map(item => {
            const isCompleted = completedPairs.includes(item.id);
            const isSelected = selectedLeft === item.id;
            const isError = errorPair && errorPair[0] === item.id;

            return (
              <button
                key={`left-${item.id}`}
                onClick={() => !isCompleted && !isAnswered && setSelectedLeft(item.id)}
                disabled={isCompleted || isAnswered}
                className={clsx(
                  "p-4 rounded border-2 transition-all font-headline-sm",
                  isCompleted ? "opacity-0 invisible h-0 p-0 mb-[-12px]" : 
                  isSelected ? "border-primary-container bg-primary-fixed/20 text-primary-container" :
                  isError ? "border-red-500 bg-red-50 text-red-500 shake" :
                  "border-outline-variant bg-surface hover:border-primary-container text-on-surface"
                )}
              >
                {item.text}
              </button>
            )
          })}
        </div>
        <div className="flex flex-col gap-3">
          {rightItems.map(item => {
            const isCompleted = completedPairs.includes(item.id);
            const isSelected = selectedRight === item.id;
            const isError = errorPair && errorPair[1] === item.id;

            return (
              <button
                key={`right-${item.id}`}
                onClick={() => !isCompleted && !isAnswered && setSelectedRight(item.id)}
                disabled={isCompleted || isAnswered}
                className={clsx(
                  "p-4 rounded border-2 transition-all font-body-lg",
                  isCompleted ? "opacity-0 invisible h-0 p-0 mb-[-12px]" : 
                  isSelected ? "border-primary-container bg-primary-fixed/20 text-primary-container" :
                  isError ? "border-red-500 bg-red-50 text-red-500 shake" :
                  "border-outline-variant bg-surface hover:border-primary-container text-on-surface"
                )}
              >
                {item.text}
              </button>
            )
          })}
        </div>
      </div>

      {isAnswered && (
        <FeedbackBlock isCorrect={true} explanation={exercise.explanation} onNext={onNext} />
      )}
    </article>
  );
}
