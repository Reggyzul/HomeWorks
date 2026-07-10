/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  scrolled?: boolean;
  variant?: 'light' | 'dark' | 'color';
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({
  scrolled = false,
  variant,
  className = '',
  iconOnly = false,
}: LogoProps) {
  // Determine if we need to invert/brighten the logo for a dark background (e.g. transparent navbar)
  const isDarkBackground = !scrolled && (variant === 'dark' || !variant);

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logo.avif"
        alt="HomeWorks Group"
        className={`h-14 md:h-18 w-auto object-contain transition-all duration-500 ${
          isDarkBackground ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
}
