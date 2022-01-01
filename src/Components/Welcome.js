import React from 'react'
import Style from './welcome.module.css';
function Welcome() {
    return (
        <div className={Style.container}>
            <h1 className={Style.heading}>Welcome to the recipe app</h1>
            <p className={Style.para}>This is a React app for searching recipes. This app fetches the <a href="https://developer.edamam.com/edamam-docs-recipe-api" target='_blank' className={Style.anchor}>'Recipe Search' API</a> from Edamam website which contains over 2.3 million recipes. You can also refer the calories of a particular recipe. Just search the dish name and the recipes if the related dishes will appear. If no recipes are found, then this welcome message will be displayed. Have a great cooking!
            </p>
            <div className={Style.credits}>Made with love by <a href="https://guru-nadhan.github.io/Guru-Portfolio/" target='_blank' className={Style.anchor}>Guru Nadhan</a></div>
        </div>
    )
}

export default Welcome
