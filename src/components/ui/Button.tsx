import clsx from 'clsx';
import type {ButtonHTMLAttributes} from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'warn';
};

export default function Button({
  children,
  variant = 'primary',
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'h-12 rounded px-4 py-2 text-white',
        variant === 'primary' && 'bg-green-500',
        variant === 'warn' && 'bg-red-500',
      )}
      {...props}
    >
      {children}
    </button>
  );
}
