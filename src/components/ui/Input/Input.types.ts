import type { ReactNode, ChangeEvent } from "react";

export default interface CustomInputProps {
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  size?: "small" | "middle" | "large";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
