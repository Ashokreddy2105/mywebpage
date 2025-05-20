import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  phrases: string[];
  typingSpeed: number;
  deletingSpeed: number;
  pauseDuration: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  phrases,
  typingSpeed,
  deletingSpeed,
  pauseDuration,
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isDeleting) {
      // Deleting text
      if (text.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    } else {
      // Typing text
      if (text.length < currentPhrase.length) {
        timeoutRef.current = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Pause at the end of typing
        setIsTyping(false);
        timeoutRef.current = setTimeout(() => {
          setIsTyping(true);
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <h2 className="font-heading text-xl md:text-2xl text-primary inline-block">
      <span className="inline-block">{text}</span>
      <span 
        className={`inline-block w-1 h-6 ml-1 bg-primary ${isTyping ? 'animate-blink' : 'opacity-0'}`}
      />
    </h2>
  );
};

export default TypingEffect;