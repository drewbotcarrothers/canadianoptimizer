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
      const target = e.target as HTMLElement;
      
      // Find the closest parent with the .collapsible class within this container
      const collapsible = target.closest('.collapsible');
      
      if (collapsible && container.contains(collapsible)) {
        collapsible.classList.toggle('active');
        const contentArea = collapsible.nextElementSibling as HTMLElement;
        
        if (contentArea && contentArea.classList.contains('content')) {
          contentArea.classList.toggle('show');
        }
      }
    };

    // Attach listener directly to this specific container in the capture phase
    container.addEventListener('click', handleInternalClick, true);
    
    return () => {
      container.removeEventListener('click', handleInternalClick, true);
    };
  }, [content]); // Re-attach if content updates (e.g. on navigation)

  return (
    <div 
      ref={containerRef}
      className="blog-content-exact"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
