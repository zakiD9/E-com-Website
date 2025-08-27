import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/navbar/NavBar";
import Billing from "../components/pages/profile/ShoppingCart/BillingInformation/BillingSection";


export default function Profile(){

    return(
        <>
                <Navbar />
            <Container>
                <div className="flex gap-5 my-10">
                    <Billing />
                </div>
            </Container>
            <Footer />
                </>
    )
}