import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState({
    type: 'default', // 'default', 'project', 'clickable'
    text: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Smooth springs for cursor movement
  const cursorX = useSpring(0, { damping: 28, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 250 });

  useEffect(() => {
    // Check mobile / touch device
    const checkMobile = () => {
      const mobileQuery = window.matchMedia('(max-width: 1024px) or (pointer: coarse)');
      setIsMobile(mobileQuery.matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Dynamic hover detection via data attributes or element tags
    const handleElementOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, input, textarea, select');
      if (!target) {
        setCursorState({ type: 'default', text: '' });
        return;
      }

      const cursorType = target.getAttribute('data-cursor');
      const cursorText = target.getAttribute('data-cursor-text') || 'VIEW';

      if (cursorType === 'project') {
        setCursorState({ type: 'project', text: cursorText });
      } else if (cursorType === 'drag') {
        setCursorState({ type: 'drag', text: 'DRAG' });
      } else {
        setCursorState({ type: 'clickable', text: '' });
      }
    };

    window.addEventListener('mouseover', handleElementOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleElementOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: cursorState.type === 'project' ? 84 : cursorState.type === 'clickable' ? 44 : cursorState.type === 'drag' ? 68 : 12,
        height: cursorState.type === 'project' ? 84 : cursorState.type === 'clickable' ? 44 : cursorState.type === 'drag' ? 68 : 12,
        backgroundColor: cursorState.type === 'project' || cursorState.type === 'drag' ? '#FBF9F5' : '#FBF9F5',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 220 }}
    >
      {cursorState.type === 'project' && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[#121212] font-medium text-xs tracking-widest uppercase font-sans select-none"
        >
          {cursorState.text}
        </motion.span>
      )}
      {cursorState.type === 'drag' && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[#121212] font-medium text-[10px] tracking-widest uppercase font-sans select-none"
        >
          DRAG
        </motion.span>
      )}
    </motion.div>
  );
}
