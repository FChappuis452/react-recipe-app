import React, {useEffect, useState} from 'react';
import './App.css';
import Recipes from './Recipes'

function App() {

  const APP_ID = '0515df7c';
  const APP_KEY = '39ddfc05a555e445fd99fd5a226c171d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () =>{
    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    
    <div className="App">
      <form 
        onSubmit={getSearch}
        className="search-form"
      >

        <input 
          className="search-bar" 
          type='text'
          value={search}
          onChange={updateSearch}
        />

        <button 
          className="search-button" 
          type='submit'
        >
          Search
        </button>
      </form>   
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipes 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
