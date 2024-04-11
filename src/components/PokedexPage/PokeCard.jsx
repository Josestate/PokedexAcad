import React, { useEffect } from 'react'
import UseFetch from '../../hooks/UseFetch'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ pokeInfo }) => {

    const [pokemon, getPokemon] = UseFetch(pokeInfo.url)

    useEffect(()=>{
        getPokemon()
    },[])

    const navigate = useNavigate();

    const handlePockeDetail = () => {
        navigate(`/pokedex/${pokeInfo.name}`)
    }

    console.log(pokemon)

    return (
        <article onClick={handlePockeDetail}>
            <header>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon" />
            </header>
            <section>
                <h3>{pokemon?.name}</h3>
                <ul>
                    {
                        pokemon?.types.map(typeInfo => (
                        <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
                        ))
                    }
                </ul>
            </section>
            <hr />
            <section>
                <ul>
                    {
                        pokemon?.stats.map(statInfo => (

                            <li key={statInfo.stat.url}>
                                <span>{statInfo.stat.name}</span>
                                <span>{statInfo.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )

}

export default PokeCard