import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className = '',
  children
}) => {
  const variantClasses = {
    default: 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200',
    secondary: 'bg-gray-100 text-gray-800 border border-gray-200',
    outline: 'border-2 border-gray-300 text-gray-700 bg-transparent'
  };

  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold';
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;