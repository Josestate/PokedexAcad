import React, { useEffect } from 'react'
import UseFetch from '../../hooks/UseFetch'

const SelectType = ({ setTypeSelected }) => {
 
    const url = 'https://pokeapi.co/api/v2/type'

    const [ types, getTypes ] = UseFetch(url);

    useEffect(()=>{
        getTypes()
    },[])

    console.log(types)

    const handleChange = e => {
        setTypeSelected(e.target.value)
    }

    return (
        <select onChange={handleChange}>
            <option value="">All pokemons</option>
            {
                types?.results.map(typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url} >{typeInfo.name}</option>
                ) )
            }
        </select>
    )
}

export default SelectType