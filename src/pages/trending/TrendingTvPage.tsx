// components 
import HeaderTrending from "../../components/shared/HeaderTrending";
import SideBar from "../../components/shared/SideBar";



export default function TrendingTv() {
    return (
        <>
        
            <HeaderTrending currentPage='tv' />
            <SideBar currentPage='trending' />
        </>
    )
}