import React, { useState, useEffect } from 'react'

import './drink.scss'

function DrinkBeer5() {
    
    const isBrowser = () => typeof window !== "undefined"

    /** Stats for beer */
    const initialCountBeer5 = () => Number (isBrowser() && window.localStorage.getItem('countBeer5') || 0)
    const [countBeer5, setCountBeer5] = useState(initialCountBeer5)
    const incrementBeer5 = () => setCountBeer5(countBeer5 + 1)
    const decrementBeer5 = () => setCountBeer5(countBeer5 - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countBeer5', countBeer5)
    }, [countBeer5])

    /** stats for shots */
    const initialCountShots5 = () => Number (isBrowser() && window.localStorage.getItem('countShots5') || 0)
    const [countShots5, setCountShots5] = useState(initialCountShots5)
    const incrementShots5 = () => setCountShots5(countShots5 + 1)
    const decrementShots5 = () => setCountShots5(countShots5 - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countShots5', countShots5)
    }, [countShots5])

    /** Stats for Drinks/Wine */
    const initialCountDrinks5 = () => Number (isBrowser() && window.localStorage.getItem('countDrinks5') || 0)
    const [countDrinks5, setCountDrinks5] = useState(initialCountDrinks5)
    const incrementDrinks5 = () => setCountDrinks5(countDrinks5 + 1)
    const decrementDrinks5 = () => setCountDrinks5(countDrinks5 - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countDrinks5', countDrinks5)
    }, [countDrinks5])

    
    return(
        <div className="container">
            <h4 className="name">Ingvi</h4>
            Beers:
            <button className="beerBttn" onClick={incrementBeer5}>+</button>
                <button className="number">{countBeer5}</button>
            <button className="decrementBttn" onClick={decrementBeer5}>-</button>
            Shots:
            <button className="shotsBttn" onClick={incrementShots5}>+</button>
                <button className="number">{countShots5}</button>
            <button className="decrementBttn" onClick={decrementShots5}>-</button>
            Drinks/Wine:
            <button className="drinksBttn" onClick={incrementDrinks5}>+</button>
                <button className="number">{countDrinks5}</button>
            <button className="decrementBttn" onClick={decrementDrinks5}>-</button>
        </div>
    )
}

export default DrinkBeer5;