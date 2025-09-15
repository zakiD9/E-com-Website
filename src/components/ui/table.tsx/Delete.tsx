import { TrashIcon } from "@heroicons/react/24/outline";

type DeleteButtonProps = {
    userId:number;
    onClick?: (userId: number) => void;
};

export default function DeleteButton({
  userId = 1,
  onClick,
}: DeleteButtonProps) {

  return (
    <button
      onClick={() => onClick?.(userId)}
      className={`p-1 duration-150 active:scale-110 hover:text-gray-800 transition`}
    >
      <TrashIcon className="h-5 w-5" />
    </button>
  );
}
