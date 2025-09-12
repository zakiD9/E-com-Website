import { TrashIcon } from "@heroicons/react/24/outline";

type DeleteButtonProps = {
    userId:number;
};

export default function DeleteButton({
    userId=1
}: DeleteButtonProps) {

  return (
    <button
      className={`p-2 duration-150 active:scale-110 hover:text-gray-800 transition`}
    >
      <TrashIcon className="h-5 w-5" />
    </button>
  );
}
