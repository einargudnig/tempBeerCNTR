import React, { useState, useEffect } from 'react'

import './drink.scss'

function DrinkBeer2() {
    
    const isBrowser = () => typeof window !== "undefined"

    /** Stats for beer */
    const initialCountBeer2 = () => Number (isBrowser() && window.localStorage.getItem('countBeer2') || 0)
    const [countBeer2, setCountBeer2] = useState(initialCountBeer2)
    const incrementBeer2 = () => setCountBeer2(countBeer2 + 1)
    const decrementBeer2 = () => setCountBeer2(countBeer2 - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countBeer2', countBeer2)
    }, [countBeer2])

    /** stats for shots */
    const initialCountShots2 = () => Number (isBrowser() && window.localStorage.getItem('countShots2') || 0)
    const [countShots2, setCountShots2] = useState(initialCountShots2)
    const incrementShots2 = () => setCountShots2(countShots2 + 1)
    const decrementShots2 = () => setCountShots2(countShots2 - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countShots2', countShots2)
    }, [countShots2])

    /** Stats for Drinks/Wine */
    const initialCountDrinks2 = () => Number (isBrowser() && window.localStorage.getItem('countDrinks2') || 0)
    const [countDrinks2, setCountDrinks2] = useState(initialCountDrinks2)
    const incrementDrinks2 = () => setCountDrinks2(countDrinks2 + 1)
    const decrementDrinks2 = () => setCountDrinks2(countDrinks2 - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countDrinks2', countDrinks2)
    }, [countDrinks2])

    
    return(
        <div className="container">
            <h4 className="name">Einar</h4>
            Beers:
            <button className="beerBttn" onClick={incrementBeer2}>+</button>
            <button className="number">{countBeer2}</button>
            <button className="decrementBttn" onClick={decrementBeer2}>-</button>
            Shots:
            <button className="shotsBttn" onClick={incrementShots2}>+</button>
            <button className="number">{countShots2}</button>
            <button className="decrementBttn" onClick={decrementShots2}>-</button>
            Drinks/Wine:
            <button className="drinksBttn" onClick={incrementDrinks2}>+</button>
            <button className="number">{countDrinks2}</button>
            <button className="decrementBttn" onClick={decrementDrinks2}>-</button>
            

        </div>
    )
}

export default DrinkBeer2;