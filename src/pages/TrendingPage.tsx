import Header from "../components/Header";
import SideBar from "../components/SideBar";


export default function Trending() {
    return (
        <>
            <Header />
            <SideBar currentPage='trending' />
        </>
    )
}