import { Header } from "antd/es/layout/layout";
import Navbar from "../components/layout/navbar/NavBar";


export default function Home(){
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary ">
    <Navbar />
    </div>
);
}