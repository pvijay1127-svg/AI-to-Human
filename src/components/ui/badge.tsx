import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'outline' | 'gradient';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className = '',
  children
}) => {
  const variantClasses = {
    default: 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200/50',
    secondary: 'bg-gray-100/80 text-gray-700 border border-gray-200/50 backdrop-blur-sm',
    outline: 'border-2 border-gray-300/60 text-gray-600 bg-white/50',
    gradient: 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200/50'
  };

  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold shadow-sm';
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;