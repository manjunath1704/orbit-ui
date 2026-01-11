import React, { forwardRef, memo } from "react";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

/**
 * Button
 *
 * - Accessible button component that supports anchor fallback via `as="a"`.
 * - Supports className/style overrides and forwards refs.
 */
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const {
    as = "button",
    variant = "primary",
    size = "md",
    children,
    className,
    style,
    disabled,
    href,
    type = "button",
    onClick,
    ...rest
  } = props;

  const cls = [
    styles.base,
    styles[variant] ?? "",
    styles[size] ?? "",
    disabled ? styles.disabled : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a") {
    // Anchor: ensure keyboard accessibility (role/button if provided) is up to the consumer.
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        className={cls}
        style={style}
        href={href}
        onClick={onClick}
        aria-disabled={disabled || undefined}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      type={type}
      className={cls}
      style={style}
      onClick={onClick}
      disabled={disabled}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default memo(Button);
