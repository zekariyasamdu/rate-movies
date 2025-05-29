// components 
import HeaderTrending from "../../components/HeaderTrending";
import LoadingScreen from "../../components/LoadingScreen";
import LoadedMovies from "../../components/MovieContainer";
import PageTurner from "../../components/PageTurner";
import SideBar from "../../components/SideBar";
// contexts
import { ContentUpdatedContext } from "../../contexts/ContentUpdatedContext";
import { LoadingScreenContext } from "../../contexts/LoadingScreenContext";
import { PageNumberContext } from "../../contexts/PageNumberContext";


export default function TrendingMovies() {
    return (
        <>
            <LoadingScreenContext>
                <ContentUpdatedContext>
                    <PageNumberContext>

                        <LoadingScreen>
                            <SideBar currentPage='trending' />
                            <HeaderTrending currentPage='movies' />
                            <PageTurner />
                            <LoadedMovies />
                            <PageTurner />
                        </LoadingScreen>



                    </PageNumberContext>
                </ContentUpdatedContext>
            </LoadingScreenContext>




        </>
    )
}