import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  className = '',
  children
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200/50',
    secondary: 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200/50',
    accent: 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border border-orange-200/50',
    success: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200/50',
    warning: 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border border-amber-200/50',
    outline: 'border-2 border-gray-300 text-gray-700 bg-white/80 backdrop-blur-sm'
  };

  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium shadow-sm';
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;