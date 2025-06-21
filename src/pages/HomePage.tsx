import HorizontalItemContainer from "../components/item-card/HorizontalItemContainer";
import HomeMainLayout from "../components/layouts/HomeMainLayout";
import RootLayout from "../components/layouts/RootLayout";
import SideLayout from "../components/layouts/SideLayout";
import Navbar from "../components/shared/NavBar";
import useFetchItemData from "../hooks/fetch-data-hooks/useFetchItemData";
import type { IFetchedType } from "../types/items";



export default function Home() {
    const fetchedData: IFetchedType | null = useFetchItemData();
    return (

        <RootLayout>
            <SideLayout>
                <Navbar />
            </SideLayout>
            <HomeMainLayout>
                <HorizontalItemContainer title="Trending Movies" data={fetchedData}/>
            </HomeMainLayout>

        </RootLayout>
    )
}