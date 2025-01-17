/* eslint-disable  @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React, { FC } from 'react';
export * from './button';

interface AppProps {
  children: React.ReactNode;
  className: string;
  link?: string;
  type?: any;
  onClick?: any;
  dataOverlay?: any;
  target?: any;
}

export const SubmitButton: FC<AppProps> = ({
  children,
  className,
  type,
  onClick,
}: AppProps) => {
  return (
    <button
      className={`px-5 py-3 rounded-lg text-sm font-semibold ${className} hover:shadow-xl active:scale-90 
        transition duration-150`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const LinkButton: FC<AppProps> = ({
  children,
  className,
  link,
  onClick,
  target = '_self',
}: AppProps) => {
  return (
    <Link href={link ?? '#'} target={target}>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};
