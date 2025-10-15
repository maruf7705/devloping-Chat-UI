import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const mockMessages = [
  { id: 1, sender: 'ai', text: 'Hello! How can I help you today?' },
  { id: 2, sender: 'user', text: 'I want to learn about React.' },
  { id: 3, sender: 'ai', text: 'Great! React is a JavaScript library for building user interfaces.' },
];

const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1 p-3">
    <motion.div
      className="w-2 h-2 bg-accent rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="w-2 h-2 bg-accent rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
    />
    <motion.div
      className="w-2 h-2 bg-accent rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
    />
  </div>
);

const Chat: React.FC = () => {
  return (
    <div className="container mx-auto max-w-3xl p-4">
      <div className="space-y-4">
        {mockMessages.map((msg, index) => (
          <motion.div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div
              className={`p-3 rounded-lg max-w-md ${
                msg.sender === 'user'
                  ? 'bg-accent text-background'
                  : 'bg-surface'
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div className="flex justify-start">
          <TypingIndicator />
        </div>
      </div>
      <div className="mt-8 flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow bg-surface p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button className="bg-accent p-3 rounded-r-lg text-background">
          <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
