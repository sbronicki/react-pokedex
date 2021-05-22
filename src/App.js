import React, { useState, useEffect, useCallback } from 'react'

import Middle from './components/Middle/Middle'
import Side from './components/Side/Side'
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
      <Side Left />
      <Middle data={pokeData} />
      <Side Right />
    </div>
  );
}

export default App;
