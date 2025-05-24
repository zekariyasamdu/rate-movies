import HeaderTrending from "../../components/HeaderTrending";
import LoadedMovies from "../../components/MovieContainer";
import PageTurner from "../../components/PageTurner";
import SideBar from "../../components/SideBar";
import { ContentUpdatedContext } from "../../contexts/ContentUpdatedContext";
import { PageNumberContext } from "../../contexts/PageNumberContext";


export default function TrendingMovies() {
    return (
        <>

            <SideBar currentPage='trending' />

            <ContentUpdatedContext>
                <PageNumberContext>
                    <HeaderTrending currentPage='movies' />
                    <PageTurner />
                </PageNumberContext>
                <LoadedMovies />
            </ContentUpdatedContext>


        </>
    )
}