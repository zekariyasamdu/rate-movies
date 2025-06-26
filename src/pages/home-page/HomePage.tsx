import Login from "../../components/buttons/nav-buttons/Login";
import HorizontalBackDropContainer from "../../components/home-backdrop/HorizontalBackDropContainer";
import HorizontalItemContainer from "../../components/item-card/HorizontalItemContainer";
import ContaintDisplayLayout from "../../components/layouts/ContaintDisplayLayout";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import MainLayout from "../../components/layouts/MainLayout";
import RootLayout from "../../components/layouts/RootLayout";
import SideLayout from "../../components/layouts/SideLayout";
import RecentlyAddedContainer from "../../components/recently-added/RecentlyAddedContainer";
import Navbar from "../../components/shared/NavBar";
import SearchInput from "../../components/shared/SearchInput";
import AppName from "../../components/static-data/AppName";
import useFetchItemData from "../../hooks/fetch-data-hooks/useFetchItemData";
import useFetchTopRatedData from "../../hooks/fetch-data-hooks/useFetchTopRatedData";
import type { IFetchedType } from "../../types/items";



export default function Home() {
    const fetchedDataMovie: IFetchedType | null = useFetchItemData();
    const fetchedDataTv: IFetchedType | null = useFetchItemData("tv");
    const topRatedFetchedData: IFetchedType | null = useFetchTopRatedData();
    return (

        <RootLayout>

            <HeaderLayout>
                <AppName className="absolute left-5 p-5 top-1/2 -translate-y-1/2" />
                <SearchInput />
                <Login className="absolute left-0 right-5" />
            </HeaderLayout>

            <MainLayout>
                <SideLayout>
                    <Navbar />
                </SideLayout>

                <ContaintDisplayLayout>
                    <HorizontalBackDropContainer data={fetchedDataMovie} />

                    <div className="flex flex-row w-full">

                        <div className="flex flex-col gap-10 w-[80%]">
                            <HorizontalItemContainer title="Top Rated Movies" data={topRatedFetchedData} />
                            <HorizontalItemContainer title="Trending Movies" data={fetchedDataMovie}  />
                            <HorizontalItemContainer title="Trending Tv" data={fetchedDataTv}  />
                        </div>

                        <div className="w-[20%]">
                            <RecentlyAddedContainer />
                        </div>
                    </div>

                </ContaintDisplayLayout>

            </MainLayout>


        </RootLayout>
    )
}