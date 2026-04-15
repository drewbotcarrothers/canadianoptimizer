'use client';

import { useEffect, useRef } from 'react';

interface ClientBlogContentProps {
  content: string;
}

/**
 * A robust Client Component wrapper for rendering 'exact source' blog content.
 * Handles interactivity (like collapsibles) locally via a ref to ensure 
 * 100% reliable listener attachment regardless of hydration timing.
 */
export default function ClientBlogContent({ content }: ClientBlogContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleInternalClick = (e: MouseEvent) => {
      // Use capture phase and closest() for robust target identification
      const target = e.target as HTMLElement;
      const collapsible = target.closest('.collapsible');
      
      if (collapsible && container.contains(collapsible)) {
        // Prevent event from triggering unwanted side effects or multiple toggles
        e.preventDefault();
        
        collapsible.classList.toggle('active');
        const contentArea = collapsible.nextElementSibling as HTMLElement;
        
        if (contentArea && contentArea.classList.contains('content')) {
          contentArea.classList.toggle('show');
        }
      }
    };

    // Use capture phase (true) for high priority event handling
    container.addEventListener('click', handleInternalClick, true);
    
    return () => {
      container.removeEventListener('click', handleInternalClick, true);
    };
  }, [content]); // Re-attach only if content significantly changes

  return (
    <div 
      ref={containerRef}
      className="blog-content-exact"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
