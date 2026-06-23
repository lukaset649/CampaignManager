import { useEffect } from 'react';
import './Toast.less';

type ToastVariant = 'success' | 'warning';

interface ToastProps {
  message: string;
  onHide: () => void;
  variant?: ToastVariant;
}

const TOAST_DURATION_MS = 3000;

export const Toast = ({ message, onHide, variant = 'success' }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onHide, TOAST_DURATION_MS);
    return () => clearTimeout(timer);
  }, [onHide]);

  return (
    <div className={`toast toast--${variant}`} role="status" aria-live="polite">
      {message}
      <div className="toast__progress" />
    </div>
  );
};
