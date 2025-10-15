import { PencilSquareIcon } from "@heroicons/react/24/outline";

type EditButtonProps = {
  id: number;
  onClick?: (id: number) => void;
};

export default function EditButton({
  id = 1,
  onClick,
}: EditButtonProps) {
  return (
    <button
      className="p-1 duration-150 active:scale-110 hover:text-gray-800 transition"
      onClick={() => onClick?.(id)}
    >
      <PencilSquareIcon className="h-5 w-5" />
    </button>
  );
}
