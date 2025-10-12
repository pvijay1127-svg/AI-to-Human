import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  children
}) => {
  const classes = `bg-white rounded-lg border border-gray-200 shadow-sm ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;