import React from 'react';
import Meal from "./components/Meal"
import {Route,Routes} from 'react-router-dom';
import Recipe from './components/Recipe';



function App() {
  return (
    <div >
     <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
    </div>
  );
}

export default App;




