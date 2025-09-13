import type{ ReactNode } from "react";

type SectionProps = {
  icon: ReactNode;        
  label: string;          
  selected?: boolean;     
};

export default function Section({ icon, label, selected = false , }: SectionProps) {
  return (
    <div
      className={`
        flex items-center gap-2 px-3 py-2 cursor-pointer
        transition-colors duration-200
        ${selected ? "bg-gray-700 text-white" : "text-gray-700 hover:bg-gray-700 hover:text-white"}
      `}
    >
    <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      <span className="hidden group-hover:inline transition-opacity duration-200">
        {label}
      </span>
    </div>
  );
}
