import { useState, useEffect, useCallback } from 'react';

/**
 * Typewriter hook — cycles through an array of words with typing/deleting animation.
 * If only one word is provided, it types, pauses, deletes, and repeats.
 *
 * @param {string[]} words - Array of words to cycle through
 * @param {object} [options]
 * @param {number} [options.typeSpeed=80] - ms per character when typing
 * @param {number} [options.deleteSpeed=50] - ms per character when deleting
 * @param {number} [options.pauseTime=2000] - ms to hold the completed word
 */
export default function useTypewriter(words, options = {}) {
    const {
        typeSpeed = 80,
        deleteSpeed = 50,
        pauseTime = 2000,
    } = options;

    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const currentWord = words[wordIndex] || '';

    const tick = useCallback(() => {
        if (isDeleting) {
            setText(prev => prev.slice(0, -1));
        } else {
            setText(currentWord.slice(0, text.length + 1));
        }
    }, [isDeleting, currentWord, text.length]);

    useEffect(() => {
        // Finished typing the full word — pause, then start deleting
        if (!isDeleting && text === currentWord) {
            const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
            return () => clearTimeout(timeout);
        }

        // Finished deleting — move to next word
        if (isDeleting && text === '') {
            setIsDeleting(false);
            setWordIndex(prev => (prev + 1) % words.length);
            return;
        }

        const speed = isDeleting ? deleteSpeed : typeSpeed;
        const timeout = setTimeout(tick, speed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, currentWord, tick, typeSpeed, deleteSpeed, pauseTime, words.length]);

    return text;
}
