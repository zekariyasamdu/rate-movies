
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IMovie } from "../../types/items";
import BackDrop from "../movie-detail/DetailBackDrop";
import OverView from "../movie-detail/OverView";
import Title from "../item-card/Title";
import { useContext } from "react";
import { mediaContext } from "../../contexts/MediaContext";
import { specificIdContext } from "../../contexts/SpecificIdContext";
import { Link } from "react-router-dom";
import BackdropOverlay from "../overlays/BackdropOverlay";
import Rating from "../item-card/Rating";

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
            <BackdropOverlay />
            <BackDrop src={item.backdrop_path} />
            <div className="z-20 absolute flex flex-col gap-5 bottom-20 left-5">
                <div className="flex gap-1 text-[18px] items-center"><FontAwesomeIcon icon={faStar} />
                    <Rating rating={(item ? item.vote_average : 0)} />
                </div>
                <Title title={item?.title}></Title>
                <OverView overview={item?.overview} className="text-[18px] text-L-tertiary w-[50%] flex flex-wrap"></OverView>
            </div>

        </Link>
    )
}

export default Hot