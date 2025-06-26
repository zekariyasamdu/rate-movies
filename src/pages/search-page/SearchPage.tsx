import Login from "../../components/buttons/nav-buttons/Login";
import ItemsContainer from "../../components/item-card/ItemsContainer";
import ContaintDisplayLayout from "../../components/layouts/ContaintDisplayLayout";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import MainLayout from "../../components/layouts/MainLayout";
import RootLayout from "../../components/layouts/RootLayout";
import SideLayout from "../../components/layouts/SideLayout";
import MediaType from "../../components/shared/MediaType";
import Navbar from "../../components/shared/NavBar";
import PageTurner from "../../components/shared/PageTurner";
import SearchInput from "../../components/shared/SearchInput";
import AppName from "../../components/static-data/AppName";
import useSearchData from "../../hooks/fetch-data-hooks/useSearchData";
import type { IFetchedType } from "../../types/items";



export default function Search() {
    const searchData: IFetchedType | null = useSearchData();
    return (

        <RootLayout>

            <HeaderLayout>
                <AppName className="absolute left-5 p-5 top-1/2 -translate-y-1/2" />
                <SearchInput />
                <MediaType />
                <Login className="absolute left-0 right-5"/>
            </HeaderLayout>
            <MainLayout>

                <SideLayout>
                    <Navbar />
                </SideLayout>

                <ContaintDisplayLayout>
                    
                    <ItemsContainer data={searchData} />
                    <PageTurner totalPages={searchData?.total_pages} />
                </ContaintDisplayLayout>

            </MainLayout>

        </RootLayout>
    )
}