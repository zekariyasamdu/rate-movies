import Themes from "../buttons/style-buttons/Themes";
import Home from "../buttons/nav-buttons/Home";
import Search from "../buttons/nav-buttons/Search";
import Trending from "../buttons/nav-buttons/Trending";

type NavbarProp = {
    addClass?: string
}
export default function Navbar({addClass= ""}: NavbarProp) {


    return (
        <div className={`${addClass} fixed z-20 p-5 h-max flex flex-col`}>
            <Search/>
            <Home/>
            <Trending/>
            <Themes />
        </div>
    )
}

