import BottomBar from "./BottomBar";
import CenterBar from "./CenterBar";
import TopBar from "./TopBar";



export default function Navbar() {

  return (
    <header className="w-full">
        <TopBar />
        <CenterBar/>
        <BottomBar />
    </header>
  );
}
