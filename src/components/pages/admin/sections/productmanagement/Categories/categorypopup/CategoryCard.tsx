import DeleteButton from "../../../../../../ui/table.tsx/Delete";
import EditButton from "../../../../../../ui/table.tsx/Edit";

interface categoryProps {
  categoryName: string;
  image: string;
  onClick: () => void;
  onDelete?: () => void;
}

export default function CategoryCard(props: categoryProps) {
  return (
    <div
      className="relative flex w-full h-full flex-col hover:shadow-xl duration-300 ease-in-out cursor-pointer bg-white hover:bg-black/10 items-center rounded-lg group"
    >
      <img src={props.image} alt={props.categoryName} className="object-cover w-full h-5/6" />

      <span className="p-3">{props.categoryName}</span>

      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           onClick={(e) => e.stopPropagation()}
      >
        <EditButton size="sm"  onClick={props.onClick}/>
        <DeleteButton size="sm"/>
      </div>
    </div>
  );
}
