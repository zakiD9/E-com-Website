


export default function ShoppingCartSection(){

    return(
        <div className="flex flex-col gap-2 w-4/5">
            <span className="text-lg font-semibold">Shopping Cart</span>
            <hr className="border-t-2"/>
            <div className="bg-gray-400 px-2 py-1 flex space-x-48">
                <span className="text-white mr-10">Product</span>
                <span className="text-white">Price</span>
                <span className="text-white">Quantity</span>
                <span className="text-white">Sub-Total</span>

            </div>
        </div>
    )
}