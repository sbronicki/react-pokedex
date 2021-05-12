import React, { useState, useEffect, useCallback } from 'react'

import Card from './components/Card/Card'
import './App.css';

function App() {

  const [pokeData, setPokeData] = useState([])

  const fetchPokeData = useCallback( async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()

    const transformedData = data.results.map((pokemon) => {
      return {
        name: pokemon.name,
        url: pokemon.url
      }
    })
    setPokeData(transformedData)
  }, [])

  useEffect(() => {
    fetchPokeData()
  }, [fetchPokeData])

  return (
    <div className="App">
      <Card />
      <Card Middle={true} data={pokeData} />
      <Card />
    </div>
  );
}

export default App;
