import React, {useState, useEffect} from 'react'

function WinoaFoodRater(){

    // GET WINOA FOODS

    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(food => console.log(food))
    })

    return(
        <div>

        </div>
    )

}

export default WinoaFoodRater