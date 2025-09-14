

interface categoryCardProps{
    image:string;
    categoryName:string;
}


export default function CategoryCard(props:categoryCardProps){

    return(
        <div className="flex flex-col hover:shadow-xl duration-300 ease-in-out cursor-pointer bg-white items-center rounded-lg ">
            <img src={props.image} alt={props.categoryName} className="object-cover w-full h-5/6"/>
            <span className="p-3">{props.categoryName}</span>
        </div>
    )
}