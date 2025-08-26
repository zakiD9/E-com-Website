import Container from "../components/layout/Container";
import DashboardSidebar from "../components/layout/DashboardSideBar";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/navbar/NavBar";
import Settings from "../components/pages/profile/Settings/SettingsSection";



export default function Profile(){

    return(
        <>
                <Navbar />
            <Container>
                <div className="flex gap-5 my-10">
                    <DashboardSidebar />
                    <Settings />

                </div>
            </Container>
            <Footer />
                </>
    )
}