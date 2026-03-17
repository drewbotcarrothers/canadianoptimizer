import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  href, 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-200 text-center";
  
  const primaryClasses = "bg-canadian-red text-white hover:bg-canadian-red-hover";
  const secondaryClasses = "border-2 border-canadian-red text-canadian-red bg-transparent hover:bg-[#FFF0F2]";
  
  const combinedClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
