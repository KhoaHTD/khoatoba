import { motion } from 'framer-motion';

interface Props {
  isCorrect: boolean;
  explanation: string;
  onNext: () => void;
}

export default function FeedbackBlock({ isCorrect, explanation, onNext }: Props) {
  if (isCorrect) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col gap-space-md border border-outline-variant"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
          <div className="flex items-center gap-space-md">
            <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full text-primary-container drop-shadow-sm" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 100 100">
                <path d="M50 15 C45 5 30 8 32 20 C22 15 12 25 18 36 C8 36 6 50 16 57 C7 62 12 77 22 75 C18 86 31 93 39 84 C43 95 57 95 61 84 C69 93 82 86 78 75 C88 77 93 62 84 57 C94 50 92 36 82 36 C88 25 78 15 68 20 C70 8 55 5 50 15 Z"></path>
                <circle cx="50" cy="50" r="21" strokeWidth="2.5"></circle>
              </svg>
              <span className="absolute font-stamp text-[11px] font-bold text-primary-container leading-none">良</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">Chính xác! (正解)</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Bạn đã làm rất tốt.</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low rounded p-space-md flex flex-col gap-space-xs text-on-surface">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {explanation}
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-space-sm pt-space-xs">
          <div className="flex items-center gap-space-sm w-full sm:w-auto">
            <button onClick={onNext} className="w-full sm:w-auto px-space-lg py-2.5 rounded bg-primary-container text-on-primary hover:bg-primary active:scale-[0.99] font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-2 group">
              <span>Tiếp tục</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, x: 0 }}
      animate={{ opacity: 1, y: 0, x: [-5, 5, -5, 5, 0] }}
      transition={{ duration: 0.4 }}
      className="bg-[#ffebee] border-l-4 border-[#c62828] rounded-lg p-space-md shadow-sm flex flex-col gap-space-md"
    >
      <div className="flex items-center gap-space-md">
        <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#c62828] rounded-full text-white">
          <span className="material-symbols-outlined text-[28px]">close</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-[#c62828] font-bold">Chưa chính xác</span>
          </div>
          <span className="font-body-sm text-body-sm text-[#c62828]/80">Hãy xem lại giải thích bên dưới.</span>
        </div>
      </div>
      <div className="bg-white/50 rounded p-space-md flex flex-col gap-space-xs text-on-surface border border-[#c62828]/20">
        <p className="font-body-md text-body-md text-on-surface leading-relaxed">
          {explanation}
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-space-sm pt-space-xs">
        <div className="flex items-center gap-space-sm w-full sm:w-auto">
          <button onClick={onNext} className="w-full sm:w-auto px-space-lg py-2.5 rounded bg-[#c62828] text-white hover:bg-[#b71c1c] active:scale-[0.99] font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-2 group">
            <span>Đã hiểu, tiếp tục</span>
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
