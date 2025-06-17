
function SearchInput() {

  function getValue(){
  }
  
  return (
    <div className="w-1/3">
      <input placeholder="search" className="border-2 rounded-2xl w-full text-[16px] p-2 border-amber-100" onChange={getValue}></input>
    </div>
  )
}

export default SearchInput