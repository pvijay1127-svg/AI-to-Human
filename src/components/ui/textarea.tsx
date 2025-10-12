import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  className = '',
  ...props
}) => {
  const baseClasses = 'flex min-h-[120px] w-full rounded-xl border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-4 py-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-gray-400 hover:shadow-sm resize-none';

  const classes = `${baseClasses} ${className}`;

  return (
    <textarea className={classes} {...props} />
  );
};

export default Textarea;