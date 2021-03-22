import React from 'react';
import './recipe.css';


const Recipe = ({titulo, calorias, imagen, ingredientes}) => {
    return(
    <div className= 'recipe'>
    <h1>{titulo}</h1>
    <p>Calorias: {calorias}</p>
    <ol>
        {ingredientes.map(ingrediente => (
            <li className = "li-ingredientes">{ingrediente.text}</li>
        ))}
    </ol>
    <img className = 'img' src={imagen} alt=""/>
    </div>
)}


export default Recipe;