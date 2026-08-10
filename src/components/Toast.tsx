import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0D0D0D] text-white border border-[#39FF14]/50 px-5 py-4 rounded-xl shadow-[0_0_30px_rgba(57,255,20,0.3)] animate-slide-up">
      {type === 'success' && <CheckCircle className="w-5 h-5 text-[#39FF14] shrink-0" />}
      {type === 'info' && <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0" />}
      {type === 'error' && <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />}
      <span className="text-sm font-medium pr-2">{message}</span>
      <button 
        onClick={onClose} 
        className="p-1 text-gray-400 hover:text-white transition-colors"
        aria-label="Close Toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
