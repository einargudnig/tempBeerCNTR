import React, { useState, useEffect } from 'react'

import './drink.scss'

function DrinkBeer() {
    
    const isBrowser = () => typeof window !== "undefined"
    /** Stats for beer
     * initialites beer counter as 0 and stores value in local storage.
     * use hooks to change countBeer with setCountBeer
     * have two buttons, increment and decrement
     */
    const initialCountBeer = () => Number (isBrowser() && window.localStorage.getItem('countBeer') || 0)
    const [countBeer, setCountBeer] = useState(initialCountBeer)
    const incrementBeer = () => setCountBeer(countBeer + 1)
    const decrementBeer = () => setCountBeer(countBeer - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countBeer', countBeer)
    }, [countBeer])

    /** stats for shots */
    const initialCountShots = () => Number (isBrowser() && window.localStorage.getItem('countShots') || 0)
    const [countShots, setCountShots] = useState(initialCountShots)
    const incrementShots = () => setCountShots(countShots + 1)
    const decrementShots = () => setCountShots(countShots - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countShots', countShots)
    }, [countShots])

    /** Stats for Drinks/Wine */
    const initialCountDrinks = () => Number (isBrowser() && window.localStorage.getItem('countDrinks') || 0)
    const [countDrinks, setCountDrinks] = useState(initialCountDrinks)
    const incrementDrinks = () => setCountDrinks(countDrinks + 1)
    const decrementDrinks = () => setCountDrinks(countDrinks - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countDrinks', countDrinks)
    }, [countDrinks])

    
    return(
        <div className="container">
            <h4 className="name">Kristján</h4>
            Beers:
            <button className="beerBttn" onClick={incrementBeer}>+</button>
                <button className="number">{countBeer}</button>
            <button className="decrementBttn" onClick={decrementBeer}>-</button>
            Shots:
            <button className="shotsBttn" onClick={incrementShots}>+</button>
                <button className="number">{countShots}</button>
            <button className="decrementBttn" onClick={decrementShots}>-</button>
            Drinks/Wine:
            <button className="drinksBttn" onClick={incrementDrinks}>+</button>
                <button className="number">{countDrinks}</button>
            <button className="decrementBttn" onClick={decrementDrinks}>-</button>

        </div>
    )
}

export default DrinkBeer;