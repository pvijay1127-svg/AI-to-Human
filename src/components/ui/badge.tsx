import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  className = '',
  children
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200/50 shadow-sm',
    secondary: 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200/50 shadow-sm',
    accent: 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border border-orange-200/50 shadow-sm',
    success: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200/50 shadow-sm',
    warning: 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border border-amber-200/50 shadow-sm',
    error: 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border border-red-200/50 shadow-sm'
  };

  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-200';
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;