import React from "react";
import type { ButtonProps } from "./Button.types";
import variantStyles from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "default",
  disabled = false,
  onClick,
  icon,
  isPill = false,
  isLoading = false,
  loadingText = "Loading...",
}) => {
  const styles = variantStyles[variant];
  return (
    <button
      className={`
        flex items-center gap-2 px-4 py-2 ${isPill ? "rounded-full" : "rounded-md"} font-semibold
        ${disabled ? styles.disabled : `${styles.base} ${styles.hover}`}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
      <span className="flex items-center justify-center w-5 h-5 border border-current rounded-full">
        {icon}
      </span>
    </button>
  );
};
