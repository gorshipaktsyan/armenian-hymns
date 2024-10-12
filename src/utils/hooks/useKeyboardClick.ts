import { FormEvent, useEffect } from 'react';
interface IUseKeyboardNavigation {
  handleLeftSwipe: (e: KeyboardEvent) => void;
  handleRightSwipe: (e: KeyboardEvent) => void;
}

function useKeyboardNavigation({
  handleLeftSwipe,
  handleRightSwipe
}: IUseKeyboardNavigation): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleRightSwipe(e);
      } else if (e.key === 'ArrowRight') {
        handleLeftSwipe(e);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleRightSwipe, handleLeftSwipe]);
}

function useEnterKeySubmit(handleSubmit: (e: FormEvent) => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(new Event('submit', { bubbles: true }) as unknown as FormEvent);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSubmit]);
}

export { useEnterKeySubmit, useKeyboardNavigation };
