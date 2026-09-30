import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import { useCyberDoor } from '../context/CyberDoorContext';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0D0D0D] text-white border px-5 py-4 rounded-xl animate-slide-up"
      style={{
        borderColor: type === 'error' ? 'rgba(239, 68, 68, 0.5)' : `rgba(${rgb}, 0.5)`,
        boxShadow: type === 'error' ? '0 0 30px rgba(239, 68, 68, 0.3)' : `0 0 30px rgba(${rgb}, 0.3)`,
      }}
    >
      {type === 'success' && <CheckCircle className="w-5 h-5 shrink-0" style={{ color: primary }} />}
      {type === 'info' && <AlertCircle className="w-5 h-5 shrink-0" style={{ color: primary }} />}
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
