import HeaderTrending from "../components/shared/TrendingHeader";
import PageTurner from "../components/shared/PageTurner";
import SideBar from "../components/shared/SideBar";

import ItemsContainer from "../components/item-card/ItemsContainer";
import { LoadingProvider } from "../components/context-provider/LoadingProvider";
import { PageProvider } from "../components/context-provider/PageProvider";
import TimeRangeProvider from "../components/context-provider/TimeRangeProvider";
import TrendingHeaderFocusProvider from "../components/context-provider/TrendingHeaderFocusProvider";


export default function Trending() {
    return (
        <>
            <LoadingProvider>
                <PageProvider>
                    <TimeRangeProvider>
                        <TrendingHeaderFocusProvider>


                            <SideBar />
                            <HeaderTrending />
                            <div className="flex flex-col items-center justify-center overflow-y-scroll ">
                                <div className="h-[86vh] w-5/6 mt-18 ">

                                    <PageTurner />
                                        <ItemsContainer />
                                    <PageTurner />

                                </div>

                            </div>


                        </TrendingHeaderFocusProvider>
                    </TimeRangeProvider>
                </PageProvider>
            </LoadingProvider>



        </>
    )
}