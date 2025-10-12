import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform active:scale-95';

  const variantClasses = {
    default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5',
    outline: 'border-2 border-gray-200 bg-white/80 text-gray-700 hover:bg-gray-50 hover:border-blue-300 hover:shadow-md backdrop-blur-sm',
    ghost: 'text-gray-600 hover:bg-gray-100/80 hover:text-gray-900',
    gradient: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5'
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