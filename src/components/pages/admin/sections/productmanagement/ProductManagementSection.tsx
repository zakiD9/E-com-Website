import ReusableTabs from "../../layout/Tabs";
import AllProductSection from "./Allproducts/AllProductsSection";
import CategorySection from "./Categories/CategorySection";

const tabItems = [
    {
      key: "1",
      label: "All Products",
      children: <AllProductSection />,
    },
    {
      key: "2",
      label: "Categories",
      children: <CategorySection />,
    },
    {
      key: "3",
      label: "Brands",
      children: <div>⚙️ This is the Settings tab content</div>,
    },
  ];




export default function ProductManagementSection(){

    return(
        <div className="flex w-full flex-col gap-5 mx-5 my-5">
            <ReusableTabs items={tabItems}/>

        </div>
    )
}