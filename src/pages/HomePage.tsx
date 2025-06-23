import HorizontalItemContainer from "../components/item-card/HorizontalItemContainer";
import HeaderLayout from "../components/layouts/HeaderLayout";
import HomeMainLayout from "../components/layouts/HomeMainLayout";
import RootLayout from "../components/layouts/RootLayout";
import SideLayout from "../components/layouts/SideLayout";
import Navbar from "../components/shared/NavBar";
import SearchInput from "../components/shared/SearchInput";
import useFetchItemData from "../hooks/fetch-data-hooks/useFetchItemData";
import useFetchTopRatedData from "../hooks/fetch-data-hooks/useFetchTopRatedData";
import type { IFetchedType } from "../types/items";



export default function Home() {
    const fetchedData: IFetchedType | null = useFetchItemData();
    const topRatedFetchedData: IFetchedType | null = useFetchTopRatedData();
    return (

        <RootLayout>
            <SideLayout>
                <Navbar />
            </SideLayout>
            <HomeMainLayout>
                <HeaderLayout>
                    <SearchInput />
                </HeaderLayout>
                <HorizontalItemContainer title="Top Rated Movies" data={topRatedFetchedData} />
                <HorizontalItemContainer title="Trending Movies" data={fetchedData} />
            </HomeMainLayout>

        </RootLayout>
    )
}