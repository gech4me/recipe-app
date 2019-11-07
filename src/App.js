import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '53d6181b';
  const APP_KEY = 'bec2effb00a6d049a171d5cc2faca269';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      getRecipes();
  }, []);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
  };
  return (
      <div className="App">
        <form action="#" className="search-form">
          <input className="search-bar" type="text" />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
  );
};

export default App;
