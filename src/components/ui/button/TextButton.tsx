import React from "react";
import { Link } from "react-router-dom";

type TextButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeStyles = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const TextButton: React.FC<TextButtonProps> = ({
  label,
  onClick,
  href,
  disabled = false,
  fullWidth = false,
  size = "md",
  className = "",
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-medium 
    text-blue-600 hover:text-blue-800 
    disabled:text-gray-400 disabled:cursor-not-allowed
    transition-colors duration-200
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : "w-auto"}
    ${className}
  `;

  if (href) {
    return (
      <Link to={href} className={baseStyles}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles} disabled={disabled}>
      {label}
    </button>
  );
};
