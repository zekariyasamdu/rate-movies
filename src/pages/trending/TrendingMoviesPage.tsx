// components 
import HeaderTrending from "../../components/shared/HeaderTrending";
import LoadingScreen from "../../components/shared/LoadingScreen";
import PageTurner from "../../components/shared/PageTurner";
import SideBar from "../../components/shared/SideBar";
// contexts
import { ContentUpdatedContext } from "../../contexts/ContentUpdatedContext";
import { LoadingScreenContext } from "../../contexts/LoadingScreenContext";
import { PageNumberContext } from "../../contexts/PageNumberContext";
import TrendingPageItemContainer from "../../components/shared/TrendingPageItemContaner";


export default function TrendingMovies() {
    return (
        <>
            <LoadingScreenContext>
                <ContentUpdatedContext>
                    <PageNumberContext>

                        <LoadingScreen>
                            <SideBar currentPage='trending' />
                            <HeaderTrending currentPage='movie' />
                            <div className="flex flex-col items-center justify-center overflow-y-scroll ">
                                <div className="h-[86vh] w-5/6 mt-18 ">
                                    <div className="w-1/2 mx-auto">
                                        <PageTurner />
                                    </div>
                                    <TrendingPageItemContainer currentPage='movie' />
                                    <div className="w-1/2 mx-auto">
                                        <PageTurner />
                                    </div>
                                </div>

                            </div>


                        </LoadingScreen>



                    </PageNumberContext>
                </ContentUpdatedContext>
            </LoadingScreenContext>




        </>
    )
}