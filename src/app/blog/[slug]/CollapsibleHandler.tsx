'use client';

import { useEffect } from 'react';

/**
 * Client component to handle interactivity for legacy HTML elements 
 * (like collapsibles) embedded via dangerouslySetInnerHTML.
 */
export default function CollapsibleHandler() {
  useEffect(() => {
    // Add event listeners to all collapsible buttons
    const collapsibles = document.querySelectorAll('.collapsible');
    
    const handleCollapse = function(this: HTMLElement) {
      this.classList.toggle('active');
      const content = this.nextElementSibling as HTMLElement;
      if (content && content.classList.contains('content')) {
        content.classList.toggle('show');
      }
    };
    
    collapsibles.forEach(button => {
      button.addEventListener('click', handleCollapse);
    });
    
    // Cleanup listeners on unmount
    return () => {
      collapsibles.forEach(button => {
        button.removeEventListener('click', handleCollapse);
      });
    };
  }, []);

  return null;
}
