import { useRef, useEffect } from 'react';

/**
 * Custom hook to apply 3D perspective tilt effect on mouse movement.
 * Automatically disabled on touch devices.
 * @param {number} maxAngle - Maximum rotation angle in degrees (default: 8).
 * @returns {{ containerRef: React.RefObject, targetRef: React.RefObject }}
 */
export function useTilt(maxAngle = 8) {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = -(y / rect.height) * maxAngle;
      const rotateY = (x / rect.width) * maxAngle;

      target.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      target.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
      target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      target.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxAngle]);

  return { containerRef, targetRef };
}
