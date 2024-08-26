import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import RecipeItem from './RecipeItem';

const RecipeBoard = () => {
    const APP_ID = "6d6687a7";
    const APP_KEY = "276a106691ab94fd9dec2d5082fe0965";
  
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState();
    const [query, setQuery] = useState("avocado");
  
    useEffect(() => {
      getRecipes();
    }, [query]);
  
    
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log('data.hits',data.hits)
    };
  
    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    };
  
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
    };
  
    return (
      <div>
        <div className="header d-flex justify-content-between">
        <h2 className="text-center"><i>Finest recipes</i></h2>
        <form onSubmit={getSearch} className="search-form rounded-6" > 
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button bg-success" type="submit">
            search
          </button>
        </form>
        </div>
        
        {recipes.map((recipe , index) => (
          <RecipeItem
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            url = {recipe.recipe.url}
              />
        ))}
      </div>
    );
  };

  
export default RecipeBoard