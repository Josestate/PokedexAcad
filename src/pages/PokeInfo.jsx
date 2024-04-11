import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch';

const PokeInfo = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/bulbasaur`

  const [ pokemon, getPokemon ] = UseFetch(url);

  useEffect(()=>{
    getPokemon()
  },[name])

  console.log('pokemon', pokemon)
  return (
    <div>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <h2>{pokemon?.name}</h2>
    </div>
  )
}

export default PokeInfo