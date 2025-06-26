import  { useContext } from "react"
import  { Link } from "react-router-dom"
import { mediaContext } from "../../contexts/MediaContext"
import { specificIdContext } from "../../contexts/SpecificIdContext"
import type { IMovie } from "../../types/items"
import Thumbnail from "../item-card/Thumbnail"
import Title from "../item-card/Title"
import Year from "../item-card/Year"


type RecentlyAddedProps = {
    item: IMovie
}
function RecentlyAdded({ item }: RecentlyAddedProps) {
    const { headerItem } = useContext(mediaContext);
    const { setId } = useContext(specificIdContext)
    function changeId() {
        setId(item.id);
    }


    return (
        <Link to={`/${headerItem}/${item.id}`} onClick={changeId} className="flex flex-row gap-5 cursor-pointer">
            <Thumbnail className="w-15" src={item.poster_path} alt={item.title} />
            <div>
                <Year className="text-[16px]" date={item.release_date ? item.release_date : item.first_air_date} />
                <Title className="text-[16px]" title={item.title ? item.title : item.original_name} />
            </div>
        </Link>
    )
}

export default RecentlyAdded