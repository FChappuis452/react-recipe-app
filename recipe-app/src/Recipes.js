import React from 'react';
import style from './recipe.module.css'

function Recipes({title, calories, image, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt={image} />
            <ol>
                {ingredients.map(ingredient => (
                    <li key={title}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}


export default Recipes