import DetailContainer from "../../components/movie-detail/DetailContainer";
import MainLayout from "../../components/layouts/MainLayout";
import RootLayout from "../../components/layouts/RootLayout";
import SideLayout from "../../components/layouts/SideLayout";
import Navbar from "../../components/shared/NavBar";
import useFetchSimilarData from "../../hooks/fetch-data-hooks/useFetchSimilarData";
import ItemsContainer from "../../components/item-card/ItemsContainer";
import ContaintDisplayLayout from "../../components/layouts/ContaintDisplayLayout";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import SearchInput from "../../components/shared/SearchInput";
import AppName from "../../components/static-data/AppName";
import Login from "../../components/buttons/nav-buttons/Login";
import useFetchMovieData from "../../hooks/fetch-data-hooks/useFetchMovieData";
import type { IFetchedMovieType } from "../../types/items";



export default function Detail() {
    const similarData = useFetchSimilarData();
    const movieData: IFetchedMovieType | null = useFetchMovieData()
    return (


        <RootLayout>
            
                <HeaderLayout>
                    <AppName className="absolute left-5 p-5 top-1/2 -translate-y-1/2" />
                    <SearchInput />
                    <Login className="absolute left-0 right-5"/>
                </HeaderLayout>

            <MainLayout>
                <SideLayout>
                    <Navbar />
                </SideLayout>
                <ContaintDisplayLayout>

                    <DetailContainer movieData={movieData} />
                    <ItemsContainer data={similarData} />
                </ContaintDisplayLayout>

            </MainLayout>


        </RootLayout>


    )
}