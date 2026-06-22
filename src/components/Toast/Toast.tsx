import { useEffect } from 'react';
import './Toast.less';

interface ToastProps {
  message: string;
  onHide: () => void;
}

const TOAST_DURATION_MS = 3000;

export const Toast = ({ message, onHide }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onHide, TOAST_DURATION_MS);
    return () => clearTimeout(timer);
  }, [onHide]);

  return (
    <div className="toast" role="status" aria-live="polite">
      {message}
    </div>
  );
};
