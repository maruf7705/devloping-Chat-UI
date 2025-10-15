import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 border-b border-surface">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent rounded-full"></div>
          <h1 className="text-xl font-bold font-display">Polyconnect AI</h1>
        </div>
        {/* Theme toggle can be added here later */}
      </div>
    </header>
  );
};

export default Header;
