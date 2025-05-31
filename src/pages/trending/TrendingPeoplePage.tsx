import HeaderTrending from "../../components/shared/HeaderTrending";
import LoadingScreen from "../../components/shared/LoadingScreen";
import PageTurner from "../../components/shared/PageTurner";
import SideBar from "../../components/shared/SideBar";
// contexts
import { ContentUpdatedContext } from "../../contexts/ContentUpdatedContext";
import { LoadingScreenContext } from "../../contexts/LoadingScreenContext";
import { PageNumberContext } from "../../contexts/PageNumberContext";
import TrendingPageItemContainer from "../../components/shared/TrendingPageItemContaner";


export default function TrendingPeople() {
    return (
        <>
        <LoadingScreenContext>
                <ContentUpdatedContext>
                    <PageNumberContext>

                        <LoadingScreen>
                            <SideBar currentPage='trending' />
                            <HeaderTrending currentPage='person' />
                            <PageTurner />
                            <TrendingPageItemContainer currentPage='person' />
                            <PageTurner />
                        </LoadingScreen>



                    </PageNumberContext>
                </ContentUpdatedContext>
            </LoadingScreenContext>

        </>
    )
}