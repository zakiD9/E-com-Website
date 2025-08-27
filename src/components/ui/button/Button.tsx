import React from "react";
import type { ButtonProps } from "./Button.types";
import variantStyles from "./Button.styles";

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "default",
  size = "md",
  disabled = false,
  fullWidth = false,
  onClick,
  icon,
  iconPosition = "left",
  isPill = false,
  isLoading = false,
  loadingText = "Loading...",
}) => {
  const styles = variantStyles[variant];
  const sizeClass = sizeStyles[size];

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 font-semibold
        ${isPill ? "rounded-full" : "rounded-md"}
        ${disabled ? styles.disabled : `${styles.base} ${styles.hover}`}
        ${sizeClass}
        ${fullWidth ? "w-full" : "w-auto"}
        transition-all duration-200
      `}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center justify-center w-5 h-5">{icon}</span>
      )}

      <span className="whitespace-nowrap">
        {isLoading ? loadingText : label}
      </span>

      {icon && iconPosition === "right" && (
        <span className="flex items-center justify-center w-5 h-5">{icon}</span>
      )}
    </button>
  );
};
