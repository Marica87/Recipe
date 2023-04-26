import './App.css';
import fon from './fon.jpg';
import { useEffect, useState } from 'react';
import DisplayingRecipes from './DisplayingRecipes';



function App() {

  const API_ID = "a94d45c3";
  const API_KEY = "9d689a6a9f54c9614a9acbe4eb25bad7";

  const [inputRecipe, setInputRecipe] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('chicken')

  useEffect(() => {
      const getRecipe = async () => {
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchRecipe}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await responce.json();
      setMyRecipes(data.hits);
      console.log(data.hits) 
      }
      getRecipe()
  }, [searchRecipe])

  const myInputRecipe = (e) => {
    setInputRecipe(e.target.value)
    console.log(e.target.value)
  }

  const EnterSearch = (e) => {
    e.preventDefault();
    setSearchRecipe(inputRecipe)

  }

  const ClickSearch = () => {
    setSearchRecipe(inputRecipe)
  }

  return (
    <div className="App">
      <div className='constainer'>
        <img className='fon' src={fon} alt='fon' />
      </div>
      <div className='constainer'>
        <h1>Find a Recipe</h1>
      </div>
      <div className='constainer'>
      <form onSubmit={EnterSearch}>
        <input onChange={myInputRecipe} value={inputRecipe} placeholder='Search...' />
        <button className='btn' onClick={ClickSearch}>Search</button>
      </form>
      </div>
      
      {myRecipes.map(item => (
        <DisplayingRecipes
        label = {item.recipe.label}
        image = {item.recipe.image}
        category = {item.recipe.dishType}
        calories = {item.recipe.calories}
        ingredientLines = {item.recipe.ingredientLines}
/>
      ))}

    </div>
  );
}

export default App;
