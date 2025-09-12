import Container from "../../components/pages/customer/layout/Container"
import Footer from "../../components/pages/customer/layout/Footer";
import Navbar from "../../components/pages/customer/layout/navbar/NavBar";
import BestDeals from "../../components/pages/customer/home/BestDealsComponent";
import FeaturedProducts from "../../components/pages/customer/home/FeaturedProductsComponents";
import LandingComponent from "../../components/pages/customer/home/LandingComponent";
import SecLandingComponent from "../../components/pages/customer/home/SecLandingComponent";
import ServicesSection from "../../components/pages/customer/home/ServicesComponent";
import ShopByCategory from "../../components/pages/customer/home/ShopByCategory/ShopByCategory";
import SpecificProductCategories from "../../components/pages/customer/home/SpecificProductsCategoriesSection";
import SubsecriptionToNewsletter from "../../components/pages/customer/home/SubsecriptionSection";

export default function Home(){
    return(
        <>
        <Navbar />
    <Container>
        <LandingComponent />
        <ServicesSection />
        <BestDeals />
        <ShopByCategory />
        <FeaturedProducts />
        <SecLandingComponent />
        <SpecificProductCategories />
    </Container>
    <SubsecriptionToNewsletter />
    <Footer />
        </>
);
}