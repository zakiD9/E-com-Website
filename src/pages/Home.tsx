import Container from "../components/layout/Container"
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/navbar/NavBar";
import SignInModal from "../components/pages/Authentication/SignInPopup";
import BestDeals from "../components/pages/home/BestDealsComponent";
import FeaturedProducts from "../components/pages/home/FeaturedProductsComponents";
import LandingComponent from "../components/pages/home/LandingComponent";
import SecLandingComponent from "../components/pages/home/SecLandingComponent";
import ServicesSection from "../components/pages/home/ServicesComponent";
import ShopByCategory from "../components/pages/home/ShopByCategory/ShopByCategory";
import SpecificProductCategories from "../components/pages/home/SpecificProductsCategoriesSection";
import SubsecriptionToNewsletter from "../components/pages/home/SubsecriptionSection";

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