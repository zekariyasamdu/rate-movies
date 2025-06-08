
import SpecificIdProvider from "../components/context-provider/SpecificIdProvider";
import SideBar from "../components/shared/SideBar";
import TrendingHeaderFocusProvider from "../components/context-provider/TrendingHeaderFocusProvider";
import DetailContainer from "../components/movie-detail/DetailContainer";



export default function Detail() {
    return (
        <TrendingHeaderFocusProvider>
            <SpecificIdProvider>
                

                    <DetailContainer />
                    <SideBar />
                

            </SpecificIdProvider>
        </TrendingHeaderFocusProvider>

    )
}