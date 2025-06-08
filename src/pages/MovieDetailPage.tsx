import BackDrop from "../components/movie-detail/BackDrop";
import SpecificIdProvider from "../components/context-provider/SpecificIdProvider";
import SideBar from "../components/shared/SideBar";
import TrendingHeaderFocusProvider from "../components/context-provider/TrendingHeaderFocusProvider";



export default function Movie() {
    return (
        <TrendingHeaderFocusProvider>
            <SpecificIdProvider>
                <BackDrop />
                <SideBar />
            </SpecificIdProvider>
        </TrendingHeaderFocusProvider>

    )
}