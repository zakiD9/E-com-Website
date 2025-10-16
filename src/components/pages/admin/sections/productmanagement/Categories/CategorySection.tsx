import NewCategoryPopUp from "./categorypopup/AddNewCategoryPopUp";
import CategoryPopUp from "./categorypopup/CategoryPopUp";

const categories = [
  {
    image: "https://via.placeholder.com/150?text=Electronics",
    categoryName: "Electronics",
  },
  {
    image: "https://via.placeholder.com/150?text=Fashion",
    categoryName: "Fashion",
  },
  {
    image: "https://via.placeholder.com/150?text=Home+Decor",
    categoryName: "Home & Decor",
  },
  {
    image: "https://via.placeholder.com/150?text=Sports",
    categoryName: "Sports",
  },
  {
    image: "https://via.placeholder.com/150?text=Beauty",
    categoryName: "Beauty & Health",
  },
  {
    image: "https://via.placeholder.com/150?text=Toys",
    categoryName: "Toys & Games",
  },
  {
    image: "https://via.placeholder.com/150?text=Books",
    categoryName: "Books",
  },
  {
    image: "https://via.placeholder.com/150?text=Groceries",
    categoryName: "Groceries",
  },
];


export default function CategorySection(){

    return(
        <div className="grid grid-cols-4 grid-rows-3 w-full h-screen gap-4 p-10">
            {categories.map((category)=>(
                <CategoryPopUp key={category.categoryName} {...category} />
            ))
            }
            <NewCategoryPopUp />
        </div>
    )
}