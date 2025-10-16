import { PencilSquareIcon } from "@heroicons/react/24/outline";

type EditButtonProps = {
  onClick?: () => void;
  size?: "sm" | "md";
};

export default function EditButton({ onClick, size = "md" }: EditButtonProps) {
  const sizeClasses = size === "sm" ? "p-1" : "p-2";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses} duration-150 active:scale-110 hover:text-gray-800 transition`}
    >
      <PencilSquareIcon className={iconSize} />
    </button>
  );
}
