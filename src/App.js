import React,{ useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Recipe from './Components/Recipe';
import Welcome from './Components/Welcome';
import './App.css';

const App= () =>{

  const APP_ID='d7399328';
  const APP_KEY='9fd9618f8194e840e90893ee7045f8f5';

  const[recipes, setRecipes]= useState([]);
  const[search, setSearch]= useState("");
  const[query, setQuery]= useState('');
  const[show, setShow]= useState(true);

  useEffect( ()=>{
    getRecipies();
  },[query]);  


  const getRecipies=async()=>{
    if(query===''){
      setShow(true);
      return;
    }
    setShow(false);
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    if(data.hits.length===0){
      setShow(true);
    }
  }
  const updateSearch= e =>{
    setSearch(e.target.value);
    // console.log(search);
  }
  const getSearch= e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit" >Search</button>
      </form>
      {show ? <Welcome/>:(
      <div className="recipies">
      {recipes.map(recipe=>(
        <Recipe key={uuidv4()}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>)}
    </div>
  );
}

export default App;
