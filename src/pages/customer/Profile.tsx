import Container from "../../components/pages/customer/layout/Container";
import Footer from "../../components/pages/customer/layout/Footer";
import Navbar from "../../components/pages/customer/layout/navbar/NavBar";
import Billing from "../../components/pages/customer/profile/ShoppingCart/BillingInformation/BillingSection";


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