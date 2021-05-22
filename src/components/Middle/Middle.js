import React, {useState } from 'react'

import Selectbar from '../SelectBar/Selectbar'
import classes from './Middle.module.css'

const titleCase = (str) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

const Card = (props) => {

    const [pokeData, setPokeData] =useState({
        name: "bulbasaur",
        id: 1,
        types: ["grass", "poison"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        summary: "A strange seed was planted on its back at birth. The plant sprouts and grows with this pokémon."
    })

    const fetchSummaryHandler = async (summaryURL) => {
        const response = await fetch(summaryURL)
        const data = await response.json()

        const summary = data.flavor_text_entries[0].flavor_text

        return summary
    }

    const onChangeHandler = async (event) => {

        const string = event.target.value

        const split = string.split(' ')

        const selection = split[1].toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selection}/`)

        const data = await response.json()

        const summaryURL = data.species.url

        const summary = await fetchSummaryHandler(summaryURL)

        const types = data.types.map((type) => {
            return type.type.name
        })

        const transformedData = {
            name: data.name,
            types: types,
            id: data.id,
            sprite: data.sprites.front_default,
            summary: summary 
        }

        setPokeData(transformedData)
    }

    return(
        <div className={classes.Middle}>
            <h1>Choose Pokémon!</h1>
            <Selectbar onChangeHandler={onChangeHandler} data={props.data} />
            <h2>{pokeData.id}. {titleCase(pokeData.name)}</h2>
            {pokeData.types[1] ? 
                <h2>Types: {titleCase(pokeData.types[0])}, {titleCase(pokeData.types[1])}</h2> 
                : <h2>Type: {titleCase(pokeData.types[0])}</h2>}
            <img src={pokeData.sprite} alt={pokeData.name} />
            <p>{pokeData.summary}</p>
        </div>
    )
}

export default Card