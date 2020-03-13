import React, { useState, useEffect } from 'react'

import './drink.scss'

function DrinkBeer6() {
    
    const isBrowser = () => typeof window !== "undefined"

    /** Stats for beer */
    const initialCountBeer6 = () => Number (isBrowser() && window.localStorage.getItem('countBeer6') || 0)
    const [countBeer6, setCountBeer6] = useState(initialCountBeer6)
    const incrementBeer6 = () => setCountBeer6(countBeer6 + 1)
    const decrementBeer6 = () => setCountBeer6(countBeer6 - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countBeer6', countBeer6)
    }, [countBeer6])

    /** stats for shots */
    const initialCountShots6 = () => Number (isBrowser() && window.localStorage.getItem('countShots6') || 0)
    const [countShots6, setCountShots6] = useState(initialCountShots6)
    const incrementShots6 = () => setCountShots6(countShots6 + 1)
    const decrementShots6 = () => setCountShots6(countShots6 - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countShots6', countShots6)
    }, [countShots6])

    /** Stats for Drinks/Wine */
    const initialCountDrinks6 = () => Number (isBrowser() && window.localStorage.getItem('countDrinks6') || 0)
    const [countDrinks6, setCountDrinks6] = useState(initialCountDrinks6)
    const incrementDrinks6 = () => setCountDrinks6(countDrinks6 + 1)
    const decrementDrinks6 = () => setCountDrinks6(countDrinks6 - 1)
    useEffect(() => {
        isBrowser() && window.localStorage.setItem('countDrinks6', countDrinks6)
    }, [countDrinks6])
    
    return(
        <div className="container">
            <h4 className="name">Óli</h4>
            Beers:
            <button className="beerBttn" onClick={incrementBeer6}>+</button>
                <button className="number">{countBeer6}</button>
            <button className="decrementBttn" onClick={decrementBeer6}>-</button>
            Shots:
            <button className="shotsBttn" onClick={incrementShots6}>+</button>
                <button className="number">{countShots6}</button>
            <button className="decrementBttn" onClick={decrementShots6}>-</button>
            Drinks/Wine:
            <button className="drinksBttn" onClick={incrementDrinks6}>+</button>
                <button className="number">{countDrinks6}</button>
            <button className="decrementBttn" onClick={decrementDrinks6}>-</button>
        </div>
    )
}

export default DrinkBeer6;