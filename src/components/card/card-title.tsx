/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children?: React.ReactNode;
  className?: any;
  id?: any;
  title: string;
  description?: string;
}

export function CardTitle({
  children = null,
  className,
  title,
  id,
  description,
}: CardProps) {
  return (
    <div className="flex justify-between items-center border-b px-6 py-4">
      <div className={''}>
        <h2
          className={twMerge(
            'font-extrabold text-xl text-navy', // Added font-extrabold
            className
          )}
          id={id}
        >
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm text-gray-800">
            {description}
          </p>
        )}
      </div>
      <div className={'pr-6'}>{children}</div>
    </div>
  );
}