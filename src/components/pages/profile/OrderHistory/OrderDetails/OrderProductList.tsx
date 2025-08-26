import ShoppingCartCard from "../../ShoppingCart/ShoppingCartCard";

const products = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus 40",
    price: 120,
    quantity: 1,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a86f4a8-pegasus40.png",
  },
  {
    id: 2,
    name: "Adidas Ultraboost Light",
    price: 180,
    quantity: 2,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/abcd1234-ultraboost.png",
  },
  {
    id: 3,
    name: "Puma Velocity Nitro 2",
    price: 110,
    quantity: 1,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto/b_rgb:fafafa/global/velocity-nitro.png",
  },
];




export default function OrderProductList(){

    return(
        <div className="flex flex-col w-full gap-4">
        <span className="font-semibold text-lg">Product List</span>
        <hr  className="border-t-2"/>
            <div className="grid grid-cols-[300px_1fr_100px_100px_1px_30px] items-center gap-4 bg-gray-400 px-2 py-1 text-white font-medium">
                            <span className="text-white mr-10">Product</span>
                            <span className="text-white">Price</span>
                            <span className="text-white">Quantity</span>
                            <span className="text-white">Sub-Total</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            {products.map((product) => (
                        <ShoppingCartCard
                          disabled={true}
                          id={product.id}
                          name={product.name}
                          price={product.price}
                          quantity={product.quantity}
                          image={product.image}
                          onIncrease={(id) => console.log("Increase", id)}
                          onDecrease={(id) => console.log("Decrease", id)}
                          onRemove={(id) => console.log("Remove", id)}
                        />
                    ))}
                    </div>
        </div>
    )
}