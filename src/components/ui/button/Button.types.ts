import React from "react";

export type ButtonVariant = "primary" | "secondary" | "default";

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  isPill?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  iconPosition?:string;
}
