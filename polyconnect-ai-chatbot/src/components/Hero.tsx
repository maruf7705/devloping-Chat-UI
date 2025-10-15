import React from 'react';
import Scene from './Scene';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[50vh] flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <Scene />
      </div>
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
          Talk to me
        </h2>
        <motion.button
          className="bg-accent p-4 rounded-full text-background"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Mic size={32} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
