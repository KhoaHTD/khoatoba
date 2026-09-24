'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Exercise } from '@/types/exercise';
import { mixedExercises } from '@/data/mixed';
import ExerciseRenderer from '@/components/exercises/ExerciseRenderer';
import { motion, AnimatePresence } from 'framer-motion';

function PracticeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') || 'mixed';

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [xp, setXp] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  useEffect(() => {
    let filtered = [...mixedExercises];
    if (mode === 'vocabulary') {
      filtered = filtered.filter(ex => ex.type === 'multiple_choice');
    } else if (mode === 'sentence_ordering') {
      filtered = filtered.filter(ex => ex.type === 'sentence_ordering');
    } else if (mode === 'translation') {
      filtered = filtered.filter(ex => ex.type === 'translation');
    } else if (mode === 'grammar') {
      filtered = filtered.filter(ex => ex.type === 'grammar_choice');
    } else if (mode === 'matching') {
      filtered = filtered.filter(ex => ex.type === 'matching');
    } else if (mode === 'fill_blank') {
      filtered = filtered.filter(ex => ex.type === 'fill_blank');
    }
    
    // Shuffle
    const shuffled = filtered.sort(() => Math.random() - 0.5).slice(0, 20);
    setExercises(shuffled);
  }, [mode]);

  const currentExercise = exercises[currentIndex];
  
  if (exercises.length === 0) return <div className="p-8 text-center">Đang tải...</div>;

  const isCompleted = currentIndex >= exercises.length;

  if (isCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-surface-container-lowest border border-outline-variant rounded-lg p-space-xl max-w-lg w-full text-center shadow-sm"
        >
          <div className="w-20 h-20 mx-auto rounded-full border-4 border-primary-container flex items-center justify-center mb-6 text-primary-container rotate-[-3deg]">
            <span className="font-stamp text-[32px]">花丸</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Hoàn thành!</h1>
          <p className="font-body-md text-on-surface-variant mb-8">Bạn đã xuất sắc hoàn thành phiên học.</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-surface-container-low p-4 rounded flex flex-col items-center">
              <span className="font-label-sm text-outline uppercase tracking-wider mb-1">Độ chính xác</span>
              <span className="font-headline-sm text-on-surface font-semibold">{Math.round((correctAnswers / exercises.length) * 100)}%</span>
            </div>
            <div className="bg-surface-container-low p-4 rounded flex flex-col items-center">
              <span className="font-label-sm text-outline uppercase tracking-wider mb-1">XP Đạt được</span>
              <span className="font-headline-sm text-primary-container font-semibold">+{xp}</span>
            </div>
            <div className="bg-surface-container-low p-4 rounded flex flex-col items-center col-span-2">
              <span className="font-label-sm text-outline uppercase tracking-wider mb-1">Chuỗi đúng dài nhất</span>
              <span className="font-headline-sm text-on-surface font-semibold">{bestCombo} câu</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={() => window.location.reload()}
              className="w-full py-3 bg-primary-container text-on-primary rounded font-label-md font-medium shadow-sm hover:bg-primary transition-colors"
            >
              Luyện lại
            </button>
            <button 
              onClick={() => router.push('/')}
              className="w-full py-3 bg-surface-container border border-outline-variant text-on-surface rounded font-label-md hover:bg-surface-container-high transition-colors"
            >
              Về trang chủ
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const progress = ((currentIndex) / exercises.length) * 100;

  const handleCheck = (correct: boolean) => {
    setIsAnswered(true);
    setIsCorrect(correct);
    if (correct) {
      setXp(prev => prev + 10);
      setCorrectAnswers(prev => prev + 1);
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > bestCombo) setBestCombo(newCombo);
    } else {
      setCombo(0);
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setIsCorrect(false);
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <div className="w-full max-w-[760px] mx-auto flex flex-col gap-6 py-8 px-4 sm:px-6">
      <div className="w-full flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push('/')} className="text-on-surface hover:text-primary-container p-1 -ml-1 transition-colors flex items-center justify-center focus:outline-none" title="Thoát phiên học">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <div className="h-3.5 w-px bg-outline-variant"></div>
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Câu {currentIndex + 1}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">/ {exercises.length}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-surface-container-lowest border border-outline-variant rounded">
              <span className="material-symbols-outlined text-primary-container text-[14px]">bolt</span>
              <span className="font-stamp text-stamp text-primary-container">+{xp} XP</span>
            </div>
            {combo > 0 && (
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-secondary-fixed border border-secondary text-secondary rounded">
                <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                <span className="font-stamp text-stamp">{combo}</span>
              </div>
            )}
          </div>
        </div>
        <div className="relative w-full py-1">
          <div className="h-[3px] w-full bg-surface-variant rounded-full overflow-hidden flex items-center">
            <div className="h-full bg-primary-container transition-all duration-300 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentExercise.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ExerciseRenderer 
            exercise={currentExercise} 
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            onCheck={handleCheck}
            onNext={handleNext}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Đang tải...</div>}>
      <PracticeContent />
    </Suspense>
  );
}
