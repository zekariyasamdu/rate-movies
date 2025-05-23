import HeaderTrending from "../components/HeaderTrending";
import SideBar from "../components/SideBar";


export default function TrendingTv() {
    return (
        <>
            <HeaderTrending currentPage='tv' />
            <SideBar currentPage='trending' />
        </>
    )
}