import type { ReactNode } from "react";

export default interface CustomInputProps {
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  size?: "small" | "middle" | "large";
}