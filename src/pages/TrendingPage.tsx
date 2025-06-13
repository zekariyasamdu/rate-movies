import PageTurner from "../components/shared/PageTurner";
import ItemsContainer from "../components/item-card/ItemsContainer";
import { LoadingProvider } from "../components/context-provider/LoadingProvider";
import { PageProvider } from "../components/context-provider/PageProvider";
import TimeRangeProvider from "../components/context-provider/TimeRangeProvider";
import TrendingHeaderFocusProvider from "../components/context-provider/TrendingHeaderFocusProvider";
import RootLayout from "../components/layouts/RootLayout";
import Navbar from "../components/shared/NavBar";
import ContaintDisplayLayout from "../components/layouts/ContaintDisplayLayout";
import FooterLayout from "../components/layouts/FooterLayout";
import HeaderLayout from "../components/layouts/HeaderLayout";
import MainLayout from "../components/layouts/MainLayout";
import SideLayout from "../components/layouts/SideLayout";
import TimePeriod from "../components/shared/TimePeriod";
import MediaType from "../components/shared/MediaType";


export default function Trending() {
    return (
        <>
            <LoadingProvider>
                <PageProvider>
                    <TimeRangeProvider>
                        <TrendingHeaderFocusProvider>


                            <RootLayout>
                                <SideLayout>
                                    <Navbar />
                                </SideLayout>

                                <MainLayout>
                                    <HeaderLayout>
                                        <TimePeriod/>
                                        <MediaType />
                                    </HeaderLayout>

                                    <ContaintDisplayLayout>

                                        <ItemsContainer />

                                    </ContaintDisplayLayout>

                                    <FooterLayout>

                                        <PageTurner />
                                        
                                    </FooterLayout>
                                </MainLayout>

                            </RootLayout>


                        </TrendingHeaderFocusProvider>
                    </TimeRangeProvider>
                </PageProvider>
            </LoadingProvider>



        </>
    )
}