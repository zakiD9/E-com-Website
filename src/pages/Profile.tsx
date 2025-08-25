import Container from "../components/layout/Container";
import DashboardSidebar from "../components/layout/DashboardSideBar";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/navbar/NavBar";
import Dashboard from "../components/pages/profile/Dashboard/DashboardComponent";



export default function Profile(){

    return(
        <>
                <Navbar />
            <Container>
                <div className="flex gap-5 my-10">
                    <DashboardSidebar />
                    <Dashboard />

                </div>
            </Container>
            <Footer />
                </>
    )
}