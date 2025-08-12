import SmProductCard from "../products/Cards/SmallProductCard/SmProductCard";

const categories = [
  "Best Sellers",
  "Top Rated",
  "Special Items",
  "New Arrivals",
];

const products = [
  {
    productId: 1,
    productName: "Wireless Headphones",
    productPrice: 129.99,
    productImage:
      "https://images.unsplash.com/photo-1580894894512-2f8ac83149be?w=800&q=80",
  },
  {
    productId: 2,
    productName: "Smart Watch",
    productPrice: 99.99,
    productImage:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
  },
  {
    productId: 3,
    productName: "Running Shoes",
    productPrice: 79.99,
    productImage:
      "https://images.unsplash.com/photo-1600180758890-6e6e1f2c8f1f?w=800&q=80",
  },
];

export default function SpecificProductCategories(){

    return(
        <div className="my-10">
            <div className="grid grid-cols-4 gap-6">
        {categories.map((category) => (
        <div key={category} className="flex flex-col gap-3">
          <h2 className="font-semibold text-sm">{category}</h2>
          <div className="flex flex-col gap-3">
            {products.map((p) => (
              <SmProductCard key={p.productId} {...p} />
            ))}
          </div>
        </div>
      ))}
    </div>
        </div>
    )
}