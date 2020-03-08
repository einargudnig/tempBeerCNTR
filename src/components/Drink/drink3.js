import React, { useState, useEffect } from 'react'

import './drink.scss'

function DrinkBeer3() {
    /** Stats for beer */

    const initialCountBeer3 = () => Number (window.localStorage.getItem('countBeer3') || 0)
    const [countBeer3, setCountBeer3] = useState(initialCountBeer3)
    const incrementBeer3 = () => setCountBeer3(countBeer3 + 1)
    const decrementBeer3 = () => setCountBeer3(countBeer3 - 1)
    useEffect(() => {
        window.localStorage.setItem('countBeer3', countBeer3)
    }, [countBeer3])

    /** stats for shots */
    const initialCountShots3 = () => Number (window.localStorage.getItem('countShots3') || 0)
    const [countShots3, setCountShots3] = useState(initialCountShots3)
    const incrementShots3 = () => setCountShots3(countShots3 + 1)
    const decrementShots3 = () => setCountShots3(countShots3 - 1)
    useEffect(() => {
        window.localStorage.setItem('countShots3', countShots3)
    }, [countShots3])

    /** Stats for Drinks/Wine */
    const initialCountDrinks3 = () => Number (window.localStorage.getItem('countDrinks3') || 0)
    const [countDrinks3, setCountDrinks3] = useState(initialCountDrinks3)
    const incrementDrinks3 = () => setCountDrinks3(countDrinks3 + 1)
    const decrementDrinks3 = () => setCountDrinks3(countDrinks3 - 1)
    useEffect(() => {
        window.localStorage.setItem('countDrinks3', countDrinks3)
    }, [countDrinks3])

    
    return(
        <div className="container">
            <h4 className="name">Tommi</h4>
            Beers:
            <button className="beerBttn" onClick={incrementBeer3}>+</button>
                <button className="number">{countBeer3}</button>
            <button className="decrementBttn" onClick={decrementBeer3}>-</button>
            Shots:
            <button className="shotsBttn" onClick={incrementShots3}>+</button>
                <button className="number">{countShots3}</button>
            <button className="decrementBttn" onClick={decrementShots3}>-</button>
            Drinks/Wine:
            <button className="drinksBttn" onClick={incrementDrinks3}>+</button>
                <button className="number">{countDrinks3}</button>
            <button className="decrementBttn" onClick={decrementDrinks3}>-</button>
        </div>
    )
}

export default DrinkBeer3;