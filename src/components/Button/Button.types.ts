import React from "react";

/**
 * ButtonProps
 *
 * - as: render 'button' (default) or 'a'
 * - variant: visual variant
 * - size: visual size
 * - children: ReactNode
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: "button" | "a";
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  /**
   * Custom className to extend styles
   */
  className?: string;
  /**
   * Inline style override
   */
  style?: React.CSSProperties;
}
