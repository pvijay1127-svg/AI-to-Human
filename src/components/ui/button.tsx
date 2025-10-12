import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform active:scale-95';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 hover:scale-105',
    secondary: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 hover:scale-105',
    accent: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 hover:scale-105',
    outline: 'border-2 border-purple-200 bg-white/80 text-purple-700 hover:bg-purple-50 hover:border-purple-300 hover:shadow-md backdrop-blur-sm hover:scale-105',
    ghost: 'text-purple-600 hover:bg-purple-100/80 hover:text-purple-700 hover:scale-105'
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm rounded-lg',
    md: 'h-10 py-2 px-4 rounded-xl',
    lg: 'h-12 px-6 text-lg rounded-xl',
    xl: 'h-14 px-8 text-xl rounded-2xl'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;