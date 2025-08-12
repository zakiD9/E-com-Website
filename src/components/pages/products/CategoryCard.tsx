
interface CategoryCardprops{
    image:string;
    category:string;
}

export default function CategoryCard(props:CategoryCardprops){

    return(
        <div className="flex flex-col gap-4 items-center">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={props.image}
                    alt={props.category}
                />
            </div>
             <h1 className="text-sm text-center">{props.category}</h1>  
        </div>

    )
}