import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { queryContext } from "../../contexts/QueryContext";
import { mediaContext } from "../../contexts/MediaContext";
import { navBarContext } from "../../contexts/NavBarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchInput() {

  const nav = useNavigate()
  const { query, setQuery } = useContext(queryContext);
  const { headerItem } = useContext(mediaContext);
  const { setBar } = useContext(navBarContext)


  function getValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.trim() !== '') {
      setQuery(e.target.value)
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      nav(`/search/${headerItem}/${query}/1`)
      setBar('search')
    }
  });



  return (
    <div className="w-1/3">
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 "><FontAwesomeIcon icon={faSearch} /></div>
        <input placeholder="search" className="border-2 rounded-3xl w-full text-[16px] p-3.5 pl-10 border-amber-100" onChange={(e) => getValue(e)}></input>
      </div>
    </div>
  )
}

export default SearchInput