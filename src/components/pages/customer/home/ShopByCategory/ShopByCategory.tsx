import CategorySlider from "./ScrollableCategoriesList";



export default function ShopByCategory(){

    return(
        <div className="flex flex-col py-10 gap-5 items-center">
            <h1 className="text-3xl">Shop By Category</h1>
            <div className="w-full">
                <CategorySlider />
            </div>
        </div>
    )
}