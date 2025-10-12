import React from 'react';

interface ProgressProps {
  value: number;
  className?: string;
  max?: number;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  className = '',
  max = 100
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const baseClasses = 'relative h-6 w-full overflow-hidden rounded-full bg-purple-200/60 backdrop-blur-sm shadow-inner';
  const classes = `${baseClasses} ${className}`;

  return (
    <div className={classes}>
      <div
        className="h-full w-full flex-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out rounded-full shadow-lg"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </div>
  );
};

export default Progress;