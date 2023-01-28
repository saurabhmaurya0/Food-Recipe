import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
import "./Meal.css"
const Meal = () => {
    const [search, setSearch] = useState();
    const [show, setShow] = useState(false);
    const [item, setItem] = useState("");
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setItem(data.meals);
            setShow(true);
        })
    }, [url])

    const searchRecipe = (evt) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1><i>Search Your Food Recipe</i></h1>
                    <h4>Food is the basic necessity of every organism. Food is a substance that we consume in order to derive energy to run our body and nutrition to grow. All living organisms must have food to survive.</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" placeholder="Search Your 
Favourite Food" onChange={e => setSearch(e.target.value)} onKeyPress={searchRecipe} />
                </div>
                <div className="container">
                    {
                        show ? <MealItem data={item} /> : "Not Found"

                    }
                </div>
                <div className="indexContainer">
                    <ReacipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
                </div>

            </div>
        </>
    )
}
export default Meal;