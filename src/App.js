import React, {useEffect, useState} from 'react';
import './style.css';
import Recipe from './components/recipe'

const App = () => {

  const APP_ID = 'efb55bfe'
  const APP_KEY = '0f0da95af8102dfeffc5224c0dd3fcc5'




const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState('')
const [query, setQuery] = useState('chicken')

const request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`


  useEffect(() => {
    console.log('Effect is running')
    getRecipes()
    console.log(recipes)
  }, [query])


const getRecipes = async () => {
  const response = await fetch(request)
  const data = await response.json()
  console.log(data.hits)
  setRecipes(data.hits)
}

const updateSearch = e => {
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault()
  setQuery(search)
  setSearch('')
}

  return (
    <div className = "App">
      <h1 className= "titulo">Buscador de recetas:</h1>
      <p><i>by Guille</i></p>
      <form onSubmit ={getSearch} className= 'search-form'>
        <input className= 'search-bar' type="text" value = {search} onChange ={updateSearch}></input>
          <button className = "search-button" type="submit">
          Search
          </button>
        </form>
        <div className = "recipes"> 
        {recipes.map(recipe => (
          <Recipe 
          key = {recipe.recipe.label}
          titulo = {recipe.recipe.label}
          calorias = {recipe.recipe.calories}
          imagen = {recipe.recipe.image}
          ingredientes = {recipe.recipe.ingredients}
          />
        ))}
        </div>
      </div>
  )
}

export default App;


