import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 border-t border-surface">
      <div className="container mx-auto flex justify-between items-center text-muted-text">
        <p>&copy; 2025 Polyconnect AI. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-accent"><Github size={20} /></a>
          <a href="#" className="hover:text-accent"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-accent"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
