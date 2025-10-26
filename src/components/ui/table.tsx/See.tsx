import { EyeIcon } from "@heroicons/react/24/outline";

type SeeButtonProps = {
  onClick?: () => void;
  size?: "sm" | "md";
};

export default function SeeButton({ onClick, size = "md" }: SeeButtonProps) {
  const sizeClasses = size === "sm" ? "p-1" : "p-2";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses} duration-150 active:scale-110 hover:text-gray-800 transition`}
    >
      <EyeIcon className={iconSize} />
    </button>
  );
}
