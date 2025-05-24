import HeaderTrending from "../../components/HeaderTrending";
import SideBar from "../../components/SideBar";


export default function TrendingPeople() {
    return (
        <>
            <HeaderTrending currentPage='people' />
            <SideBar currentPage='trending' />
        </>
    )
}