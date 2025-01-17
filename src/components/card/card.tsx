/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: any;
  id?: any;
}

export function Card({
  children,
  className,
  id,
}: CardProps) {
  return (
    <div
      className={twMerge(
        'bg-white px-6 py-5 rounded-xl ring-1 ring-gray-950/5',
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
}
