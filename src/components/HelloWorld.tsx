import React from 'react';

interface HelloWorldProps {
  name?: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ name = 'World' }) => {
  return (
    <div className="hello-world">
      <h2>Hello, {name}!</h2>
      <p>This is a sample component for test app</p>
    </div>
  );
};

export default HelloWorld;