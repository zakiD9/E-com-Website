import type { ReactNode } from "react";

export interface MenuItem {
  key: string;
  label: ReactNode;
  onClick?: () => void;
}

export interface CustomDropdownProps {
  menuItems: MenuItem[];
  triggerLabel?: ReactNode;
}