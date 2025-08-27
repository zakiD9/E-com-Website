import React from "react";

export type ButtonVariant = "primary" | "secondary" | "default";

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  size?:string;
  onClick?: () => void;
  icon?: React.ReactNode;
  fullWidth?: false;

  isPill?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  iconPosition?:string;
}
