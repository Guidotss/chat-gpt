import React, { useRef, useEffect, useState } from 'react';

interface TypingEffectCanvasProps {
  text: string;
}

export const TypingEffect: React.FC<TypingEffectCanvasProps> = ({ text }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let currentIndex = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!text?.length || currentIndex >= text.length) {
        setShowCursor(false);
        cancelAnimationFrame(animationFrameId);
        return;
      }

      const nextIndex = currentIndex + 1;
      const displayText = text.slice(0, nextIndex);

      ctx.font = '16px Arial';
      ctx.fillText(displayText, 0, 20);

      if (showCursor) {
        ctx.fillText('▋', ctx.measureText(displayText).width, 20);
      }

      currentIndex = nextIndex;
      setDisplayText(displayText);

      animationFrameId = requestAnimationFrame(draw);
    };

    canvas.width = ctx.measureText(text).width;
    canvas.height = 20;

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      setShowCursor(false);
    };
  }, [text, showCursor]);

  return (
    <div style={{ display: 'inline-block' }}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <span>{displayText}</span>
    </div>
  );
};
