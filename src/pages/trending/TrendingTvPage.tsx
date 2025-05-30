import HeaderTrending from "../../components/shared/HeaderTrending";
import LoadingScreen from "../../components/shared/LoadingScreen";
import PageTurner from "../../components/shared/PageTurner";
import SideBar from "../../components/shared/SideBar";
// contexts
import { ContentUpdatedContext } from "../../contexts/ContentUpdatedContext";
import { LoadingScreenContext } from "../../contexts/LoadingScreenContext";
import { PageNumberContext } from "../../contexts/PageNumberContext";
import TrendingPageItemContaner from "../../components/shared/TrendingPageItemContaner";


export default function TrendingTv() {
    return (
        <>
        <LoadingScreenContext>
                <ContentUpdatedContext>
                    <PageNumberContext>

                        <LoadingScreen>
                            <SideBar currentPage='trending' />
                            <HeaderTrending currentPage='tv' />
                            <PageTurner />
                            <TrendingPageItemContaner currentPage='tv' />
                            <PageTurner />
                        </LoadingScreen>



                    </PageNumberContext>
                </ContentUpdatedContext>
            </LoadingScreenContext>

        </>
    )
}