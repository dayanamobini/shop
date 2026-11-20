import { useEffect, useState } from 'react';
import { prefersReducedMotion, useInView } from '../../lib/hooks';

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export function Counter({ value, prefix = '', suffix = '', duration = 1500 }: CounterProps) {
  const reducedMotion = prefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!inView || reducedMotion) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reducedMotion, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
