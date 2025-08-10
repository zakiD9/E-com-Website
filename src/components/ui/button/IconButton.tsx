import React from "react";
import type { ButtonVariant } from "./Button.types";
import variantStyles  from "./Button.styles";

interface IconButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
  isPill?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
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
        flex items-center justify-center p-2 ${isPill ? "rounded-full" : "rounded-md"} font-semibold
        ${disabled ? styles.disabled : `${styles.base} ${styles.hover}`}
      `}
      disabled={disabled}
      onClick={onClick}
      aria-label={loadingText}
      title={loadingText}
    >
      {isLoading ? (
        <span className="animate-spin"> {/* You can add a spinner icon or CSS animation here */}⏳</span>
      ) : (
        icon
      )}
    </button>
  );
};
