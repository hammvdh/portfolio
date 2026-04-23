import { useEffect, useRef, type ReactNode } from 'react';
import type { PortfolioSectionId } from './portfolioSectionIds';

export type SectionPanelProps = {
  id: PortfolioSectionId;
  className?: string;
  registerSection?: (id: PortfolioSectionId, el: HTMLElement | null) => void;
  children: ReactNode;
};

export function SectionPanel({ id, className, registerSection, children }: SectionPanelProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerSection?.(id, ref.current);
    return () => registerSection?.(id, null);
  }, [id, registerSection]);

  return (
    <section ref={ref} id={`section-${id}`} className={className} aria-labelledby={`heading-${id}`}>
      {children}
    </section>
  );
}
