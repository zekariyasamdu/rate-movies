import ItemsContainer from "../components/item-card/ItemsContainer";
import ContaintDisplayLayout from "../components/layouts/ContaintDisplayLayout";
import FooterLayout from "../components/layouts/FooterLayout";
import HeaderLayout from "../components/layouts/HeaderLayout";
import MainLayout from "../components/layouts/MainLayout";
import RootLayout from "../components/layouts/RootLayout";
import SideLayout from "../components/layouts/SideLayout";
import MediaType from "../components/shared/MediaType";
import Navbar from "../components/shared/NavBar";
import PageTurner from "../components/shared/PageTurner";
import SearchInput from "../components/shared/SearchInput";
import AppName from "../components/static-data/AppName";
import useSearchData from "../hooks/fetch-data-hooks/useSearchData";
import type { IFetchedType } from "../types/items";



export default function Search() {
    const searchData: IFetchedType | null = useSearchData();
    return (

        <RootLayout>
            <SideLayout>
                <Navbar />
            </SideLayout>

            <MainLayout>
                <HeaderLayout>
                    <AppName className="absolute left-0 top-1/2 -translate-y-1/2"/>
                    <SearchInput />
                    <MediaType />
                </HeaderLayout>

                <ContaintDisplayLayout>
                    <ItemsContainer data={searchData} />
                </ContaintDisplayLayout>

                <FooterLayout>

                    <PageTurner totalPages={searchData?.total_pages} />

                </FooterLayout>
            </MainLayout>

        </RootLayout>
    )
}