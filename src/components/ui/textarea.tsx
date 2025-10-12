import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  className = '',
  ...props
}) => {
  const baseClasses = 'flex min-h-[120px] w-full rounded-xl border-2 border-purple-200 bg-white/80 backdrop-blur-sm px-4 py-3 text-base placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-purple-300 hover:shadow-md hover:scale-105 resize-none';

  const classes = `${baseClasses} ${className}`;

  return (
    <textarea className={classes} {...props} />
  );
};

export default Textarea;