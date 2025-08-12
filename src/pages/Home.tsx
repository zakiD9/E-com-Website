import Container from "../components/layout/Container"
import Navbar from "../components/layout/navbar/NavBar";
import BestDeals from "../components/pages/home/BestDealsComponent";
import LandingComponent from "../components/pages/home/LandingComponent";
import ServicesSection from "../components/pages/home/ServicesComponent";

export default function Home(){
    return(
        <>
        <Navbar />
    <Container>
        <LandingComponent />
        <ServicesSection />
        <BestDeals />
    </Container>
        </>
);
}