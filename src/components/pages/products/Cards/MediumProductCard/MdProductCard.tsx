import { IconButton } from "../../../../ui/button/IconButton";
import MyRating from "../../../../ui/Controls/Ratings";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import WishlistButton from "../AddToWishList";


interface MdProductCardProps {
  productId: number;
  productImage: string;
  productName: string;
  DiscountProductPrice?: number;
  productPrice: number;
  productRating?: number;
  productReviews?: number;
}

export default function MdProductCard(props:MdProductCardProps){

    return(
        <div className="flex flex-col border w-[203px] h-[247px] border-border rounded-md bg-cards cursor-pointer transition-colors duration-300 ease-in-out hover:bg-border">
            <div className="relative">
                <img src={props.productImage} alt={props.productName} className="w-full h-[154px] object-cover rounded-t-md" />
                <div className="absolute top-2 right-2">
          <WishlistButton
            initialState={false}
            size={22}
            onToggle={(state) =>
              console.log("Wishlist:", props.productId, state)
            }
          />
        </div>
        </div>
            
            <div className="flex flex-col p-2  h-[93px] justify-between">
                <div className="flex flex-1  justify-between items-start">
                    <h3 className="truncate text-sm max-w-[150px]">{props.productName}</h3>
                    <IconButton variant="primary" icon={<ShoppingCartIcon className="w-4 h-4" />}/>
                </div>
                <div className="flex gap-2 items-center">
                    <h1 className="text-md">${props.DiscountProductPrice }</h1>
                    <p className="line-through text-[12px] text-gray-500">${props.productPrice}</p>
                </div>
                <div className="flex gap-3 text-sm text-gray-500">
                    <MyRating disabled={true}/>
                    <p className="text-[11px]">(2k)</p>
                </div>
            </div>

        </div>
    )
}