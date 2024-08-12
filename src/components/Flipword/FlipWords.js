import React, {useCallback, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {cn} from "../../utills/cn";

export const FlipWords = ({words, duration = 3000, className}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const nextWord = words[(words.indexOf(currentWord) + 1) % words.length];
    setCurrentWord(nextWord);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left dark:text-neutral-100 px-2",
          className,
        )}
        style={{color: "#03346E"}}
        key={currentWord}>
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{opacity: 0, y: 10, filter: "blur(8px)"}}
            animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            style={{marginLeft: "3px"}}
            className="inline-block">
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
