

interface smProductCardProps{
    productId: number;
    productName: string;
    productPrice: number;
    productImage: string;
}



export default function SmProductCard(props:smProductCardProps){
    return(
        <div className="flex min-h-[100px] min-w-[150px] cursor-pointer active:scale-95 px-3 py-2 gap-3 border rounded-md bg-cards border-border transition-all duration-300 ease-in-out hover:bg-border">
            <div className="">
                <img src={props.productImage} alt={props.productName} className="w-16 h-20 object-cover" />
            </div>
            <div className="flex flex-col justify-between">
                <h3 className="text-sm text-gray-400 font-semibold">{props.productName}</h3>
                <p className="text-sm text-primary">${props.productPrice.toFixed(2)}</p>
            </div>
        </div>
    )
}