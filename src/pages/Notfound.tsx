import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
import Container from "../components/pages/customer/layout/Container"
import Footer from "../components/pages/customer/layout/Footer";
import Navbar from "../components/pages/customer/layout/navbar/NavBar";
import { Button } from "../components/ui/button/Button";

import NotFoundImg from "../assets/0d0428c295485ec1d2d688830db1db30d617a9eb.png";

export default function NotFound(){
    return(
        <>
        <Navbar />
    <Container>
        <div className="flex flex-col gap-4 mx-64 items-center my-10 justify-center">
            <img src={NotFoundImg} alt="Error 404" className="w-[500px] h-[415px] grayscale"/>
            <span className="font-semibold text-xl">Page not found !</span>
            <span className="text-sm text-center text-gray-600">Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</span>
            <div className="flex items-center gap-2">
                <Button label="Go Back.." icon={<ArrowLeftIcon />} variant="primary"/>
                <Button label="Go to Home Page" icon={<HomeIcon />}/>
            </div>
        </div>
    </Container>
    <Footer />
        </>
);
}