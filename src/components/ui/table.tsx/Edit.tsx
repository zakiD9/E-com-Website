import { PencilSquareIcon } from "@heroicons/react/24/outline";

type EditButtonProps = {
  userId: number;
  onClick?: (userId: number) => void;
};

export default function EditButton({
  userId = 1,
  onClick,
}: EditButtonProps) {
  return (
    <button
      className="p-1 duration-150 active:scale-110 hover:text-gray-800 transition"
      onClick={() => onClick?.(userId)}
    >
      <PencilSquareIcon className="h-5 w-5" />
    </button>
  );
}
