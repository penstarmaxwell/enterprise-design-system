
import React from "react";
import "./Button.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`ds-button ds-button--${variant} ds-button--${size} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
