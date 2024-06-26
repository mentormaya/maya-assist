import React, { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Markdown from './markdown';

interface TypewriterProps {
  text: string;
  delay?: number;
  infinite?: boolean;
  id?: string
  className?: string | undefined
}

const MarkdownTypewriter: React.FC<TypewriterProps> = ({ text, delay = 40, infinite = false, id = "typewriter", className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const updateText = () => {
      if (displayText !== text) {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timeout);
      }
    };

    if (!infinite) {
      timeout = setInterval(updateText, delay);
    } else {
      setCurrentIndex(0);
      setDisplayText('');
      timeout = setInterval(updateText, delay);
    }

    return () => clearInterval(timeout);
  }, [text, delay, infinite, currentIndex, displayText]);

  useEffect(() => {
    if (!infinite) {
      setDisplayText('');
      setCurrentIndex(0);
    }
  }, [text, infinite]);
  return <Markdown content={displayText} />
};

export default MarkdownTypewriter;
