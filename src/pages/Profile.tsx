import Container from "../components/layout/Container";
import DashboardSidebar from "../components/layout/DashboardSideBar";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/navbar/NavBar";
import OrderHistory from "../components/pages/profile/OrderHistory/OrderHistorySection";
import ShoppingCartSection from "../components/pages/profile/ShoppingCart/ShoppingCartSection";
import WishList from "../components/pages/profile/WishList/WishList";



export default function Profile(){

    return(
        <>
                <Navbar />
            <Container>
                <div className="flex gap-5 my-10">
                    <DashboardSidebar />
                    <WishList />

                </div>
            </Container>
            <Footer />
                </>
    )
}