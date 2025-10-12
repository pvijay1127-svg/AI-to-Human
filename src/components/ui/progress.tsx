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

  const baseClasses = 'relative h-4 w-full overflow-hidden rounded-full bg-gray-200';
  const classes = `${baseClasses} ${className}`;

  return (
    <div className={classes}>
      <div
        className="h-full w-full flex-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out rounded-full"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </div>
  );
};

export default Progress;