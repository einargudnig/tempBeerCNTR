import React, { useState, useEffect } from 'react'

import './drink.scss'

function DrinkBeer4() {
    /** Stats for beer */

    const initialCountBeer4 = () => Number (window.localStorage.getItem('countBeer4') || 0)
    const [countBeer4, setCountBeer4] = useState(initialCountBeer4)
    const incrementBeer4 = () => setCountBeer4(countBeer4 + 1)
    const decrementBeer4 = () => setCountBeer4(countBeer4 - 1)
    useEffect(() => {
        window.localStorage.setItem('countBeer4', countBeer4)
    }, [countBeer4])

    /** stats for shots */
    const initialCountShots4 = () => Number (window.localStorage.getItem('countShots4') || 0)
    const [countShots4, setCountShots4] = useState(initialCountShots4)
    const incrementShots4 = () => setCountShots4(countShots4 + 1)
    const decrementShots4 = () => setCountShots4(countShots4 - 1)
    useEffect(() => {
        window.localStorage.setItem('countShots4', countShots4)
    }, [countShots4])

    /** Stats for Drinks/Wine */
    const initialCountDrinks4 = () => Number (window.localStorage.getItem('countDrinks4') || 0)
    const [countDrinks4, setCountDrinks4] = useState(initialCountDrinks4)
    const incrementDrinks4 = () => setCountDrinks4(countDrinks4 + 1)
    const decrementDrinks4 = () => setCountDrinks4(countDrinks4 - 1)
    useEffect(() => {
        window.localStorage.setItem('countDrinks4', countDrinks4)
    }, [countDrinks4])


    
    return(
        <div className="container">
            <h4 className="name">Davíð</h4>
            Beers:
            <button className="beerBttn" onClick={incrementBeer4}>+</button>
                <button className="number">{countBeer4}</button>
            <button className="decrementBttn" onClick={decrementBeer4}>-</button>
            Shots:
            <button className="shotsBttn" onClick={incrementShots4}>+</button>
                <button className="number">{countShots4}</button>
            <button className="decrementBttn" onClick={decrementShots4}>-</button>
            Drinks/Wine:
            <button className="drinksBttn" onClick={incrementDrinks4}>+</button>
                <button className="number">{countDrinks4}</button>
            <button className="decrementBttn" onClick={decrementDrinks4}>-</button>
        </div>
    )
}

export default DrinkBeer4;