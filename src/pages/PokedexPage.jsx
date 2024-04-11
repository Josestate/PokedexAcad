import { useSelector } from "react-redux"
import UseFetch from "../hooks/UseFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {

  const [ typeSelected, setTypeSelected] = useState('allPokemons');

  const [pokeSearch, setPokeSearch] = useState('');

  const inputSearch = useRef();

  const trainer = useSelector( states => {states.trainer})

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

  const [pokemons, getPokemons, getPokeByType] = UseFetch(url);

  useEffect(()=>{
    if(typeSelected == 'allPokemons'){
      getPokemons()
    }else{
      getPokeByType(typeSelected)
    }
  },[typeSelected])

  const handleSubmit = e =>{
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
  }

  const pokemonsFiltered = {
    results: pokemons?.results.filter(poke => {
      return poke.name.includes(pokeSearch)
    })
  }



  return (
    <div>
      <p>Welcome<span>{trainer}</span>, here you can find your favorite pokemon</p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputSearch} />
        <button>Search</button>
      </form>
      <SelectType setTypeSelected={setTypeSelected} />
      <ListPokemons 
        pokemons = {pokemonsFiltered.results}
      />
    </div>
  )
}

export default PokedexPage