// import ReusableTabs from "../../layout/Tabs";
import AddNewProductSection from "./Allproducts/addnewproduct/AddNewProductSection";
// import AllProductSection from "./Allproducts/AllProductsSection";
// import BrandsSection from "./brands/BrandsSection";
// import CategorySection from "./Categories/CategorySection";

// const tabItems = [
//     {
//       key: "1",
//       label: "All Products",
//       children: <AllProductSection />,
//     },
//     {
//       key: "2",
//       label: "Categories",
//       children: <CategorySection />,
//     },
//     {
//       key: "3",
//       label: "Brands",
//       children: <BrandsSection />,
//     },
//   ];




export default function ProductManagementSection(){

    return(
        <div className="flex w-full bg-[#F5F5F5] flex-col gap-5 px-5 py-5">
            {/* <ReusableTabs items={tabItems}/> */}
            <AddNewProductSection />

        </div>
    )
}