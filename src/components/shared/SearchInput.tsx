import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { queryContext } from "../../contexts/QueryContext";
import { mediaContext } from "../../contexts/MediaContext";

function SearchInput() {

  const nav = useNavigate()
  const { query, setQuery } = useContext(queryContext);
  const { headerItem } = useContext(mediaContext);
  console.log(query); 


  function getValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.trim() !== '') {
      setQuery(e.target.value)
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      nav(`/search/${headerItem}/${query}/1`)
    }
  });



  return (
    <div className="w-1/3">
      <input placeholder="search" className="border-2 rounded-2xl w-full text-[16px] p-2 border-amber-100" onChange={(e) => getValue(e)}></input>
    </div>
  )
}

export default SearchInput