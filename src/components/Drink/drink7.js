import React, { useState, useEffect } from 'react'

import './drink.scss'

function DrinkBeer7() {
    /** Stats for beer */

    const initialCountBeer7 = () => Number (window.localStorage.getItem('countBeer7') || 0)
    const [countBeer7, setCountBeer7] = useState(initialCountBeer7)
    const incrementBeer7 = () => setCountBeer7(countBeer7 + 1)
    const decrementBeer7 = () => setCountBeer7(countBeer7 - 1)
    useEffect(() => {
        window.localStorage.setItem('countBeer7', countBeer7)
    }, [countBeer7])

    /** stats for shots */
    const initialCountShots7 = () => Number (window.localStorage.getItem('countShots7') || 0)
    const [countShots7, setCountShots7] = useState(initialCountShots7)
    const incrementShots7 = () => setCountShots7(countShots7 + 1)
    const decrementShots7 = () => setCountShots7(countShots7 - 1)
    useEffect(() => {
        window.localStorage.setItem('countShots7', countShots7)
    }, [countShots7])

    /** Stats for Drinks/Wine */
    const initialCountDrinks7 = () => Number (window.localStorage.getItem('countDrinks7') || 0)
    const [countDrinks7, setCountDrinks7] = useState(initialCountDrinks7)
    const incrementDrinks7 = () => setCountDrinks7(countDrinks7 + 1)
    const decrementDrinks7 = () => setCountDrinks7(countDrinks7 - 1)
    useEffect(() => {
        window.localStorage.setItem('countDrinks7', countDrinks7)
    }, [countDrinks7])
    
    return(
        <div className="container">
            <h4 className="name">Kristian</h4>
            Beers:
            <button className="beerBttn" onClick={incrementBeer7}>+</button>
                <button className="number">{countBeer7}</button>
            <button className="decrementBttn" onClick={decrementBeer7}>-</button>
            Shots:
            <button className="shotsBttn" onClick={incrementShots7}>+</button>
                <button className="number">{countShots7}</button>
            <button className="decrementBttn" onClick={decrementShots7}>-</button>
            Drinks/Wine:
            <button className="drinksBttn" onClick={incrementDrinks7}>+</button>
                <button className="number">{countDrinks7}</button>
            <button className="decrementBttn" onClick={decrementDrinks7}>-</button>
        </div>
    )
}

export default DrinkBeer7;