

interface subCategoryProps{
    id:number;
    name:string;
    isSelected?:boolean;
}


export default function SubCategory(props:subCategoryProps){

    return(
        <div key={props.id} className={`flex hover:bg-gray-50 cursor-pointer border p-2  ${props.isSelected ? `bg-gray-50` : ``}`}>
            <span className="text-sm">{props.name}</span>
        </div>
    )
}