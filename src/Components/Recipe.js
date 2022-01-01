import { v4 as uuidv4 } from 'uuid';
import Style from './recipe.module.css';

function Recipe({title, calories, image, ingredients}) {
    

    return (
        <div className={Style.recipe}>
            <h1 className={Style.heading}>{title}</h1>
            <ol className={Style.list}>
                {ingredients.map(ingredient =>(
                    <li key={uuidv4()}>{ingredient.text}</li>
    ))}
            </ol>
            <p className={Style.calories}>Calories: {Math.floor(calories)} cals</p>
            <img className={Style.image} src={image} alt="dish"/>
        </div>
    )
}

export default Recipe;
