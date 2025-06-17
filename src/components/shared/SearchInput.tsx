import { useState } from "react"

function SearchInput() {
  const [query, setQuery] = useState('');

  function getValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.trim() !== '') {
      setQuery(e.target.value)
    }
  }

  

  return (
    <div className="w-1/3">
      <input placeholder="search" className="border-2 rounded-2xl w-full text-[16px] p-2 border-amber-100" onChange={(e) => getValue(e)}></input>
    </div>
  )
}

export default SearchInput