
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IMovie } from "../../types/items";
import BackDrop from "../movie-detail/DetailBackDrop";
import OverView from "../movie-detail/OverView";
import Title from "../movie-detail/Title";
import { useContext } from "react";
import { mediaContext } from "../../contexts/MediaContext";
import { specificIdContext } from "../../contexts/SpecificIdContext";
import { Link } from "react-router-dom";

interface HotProps {
    item: IMovie
}

function Hot({ item }: HotProps) {
    const { headerItem } = useContext(mediaContext);
    const { setId } = useContext(specificIdContext)
    function changeId() {
        setId(item.id);
    }

    return (
        <Link to={`/${headerItem}/${item.id}`} onClick={changeId} className="relative w-full h-full">

            <div className="backdrop opacity-90 absolute z-10 w-full h-full"></div>
            <div className="backdrop-bottom opacity-90 absolute z-10 w-full h-full"></div>
            <BackDrop src={item.backdrop_path} />
            <div className="z-20 absolute flex flex-col gap-5 bottom-20 left-5">

                <div className="flex gap-1 text-[18px] items-center"><FontAwesomeIcon icon={faStar} />
                    {(Math.round((item ? item.vote_average : 0) * 10) / 10).toString()}
                </div>

                <Title title={item?.title}></Title>
                <OverView overview={item?.overview} className="text-[18px] text-L-tertiary w-[50%] flex flex-wrap"></OverView>
            </div>

        </Link>
    )
}

export default Hot