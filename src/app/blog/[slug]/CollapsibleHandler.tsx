'use client';

import { useEffect } from 'react';

/**
 * Client component to handle interactivity for legacy HTML elements 
 * (like collapsibles) embedded via dangerouslySetInnerHTML.
 * Uses event delegation for robustness against dynamic content rendering.
 */
export default function CollapsibleHandler() {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Find the closest parent with the .collapsible class
      const collapsible = target.closest('.collapsible');
      
      if (collapsible) {
        collapsible.classList.toggle('active');
        const content = collapsible.nextElementSibling as HTMLElement;
        
        if (content && content.classList.contains('content')) {
          content.classList.toggle('show');
        }
      }
    };

    // Use capture phase (true) to ensure we catch the event before it's stopped/intercepted
    document.addEventListener('click', handleGlobalClick, true);
    
    // Cleanup listeners on unmount
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  return null;
}
