import PageTurner from "../../components/shared/PageTurner";
import ItemsContainer from "../../components/item-card/ItemsContainer";
import RootLayout from "../../components/layouts/RootLayout";
import Navbar from "../../components/shared/NavBar";
import ContaintDisplayLayout from "../../components/layouts/ContaintDisplayLayout";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import MainLayout from "../../components/layouts/MainLayout";
import SideLayout from "../../components/layouts/SideLayout";
import TimePeriod from "../../components/shared/TimePeriod";
import MediaType from "../../components/shared/MediaType";
import SearchInput from "../../components/shared/SearchInput";
import useFetchItemData from "../../hooks/fetch-data-hooks/useFetchItemData";
import type { IFetchedType } from "../../types/items";
import AppName from "../../components/static-data/AppName";
import Login from "../../components/buttons/nav-buttons/Login";


export default function Trending() {
    const fetchedData: IFetchedType | null = useFetchItemData();
    return (
        <>

            <RootLayout>
                <HeaderLayout>
                    <AppName className="absolute left-5 p-5 top-1/2 -translate-y-1/2" />
                    <TimePeriod />
                    <SearchInput />
                    <MediaType />
                    <Login className="absolute left-0 right-5"/>
                </HeaderLayout>
                <MainLayout>

                    <SideLayout>
                        <Navbar />
                    </SideLayout>

                    <ContaintDisplayLayout>

                        <ItemsContainer data={fetchedData} />
                        <PageTurner totalPages={fetchedData?.total_pages} />
                        
                    </ContaintDisplayLayout>


                </MainLayout>

            </RootLayout>

        </>
    )
}