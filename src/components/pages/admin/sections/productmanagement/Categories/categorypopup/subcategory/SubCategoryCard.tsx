

interface subCategoryProps{
    id:number;
    name:string;
    selectedSubCategory?:number;
    onClick?:()=>void;
}


export default function SubCategory(props:subCategoryProps){

    return(
        <div onClick={props.onClick} key={props.id} className={`flex hover:bg-gray-50 cursor-pointer border p-2  ${props.selectedSubCategory == props.id ? `bg-gray-50` : ``}`}>
            <span className="text-sm">{props.name}</span>
        </div>
    )
}