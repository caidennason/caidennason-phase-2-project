import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'

function WinoaFoodRater(){

    const [foodFormData, setFoodFormData] = useState('')
    const [foodArray, setFoodArray] = useState([])

    // GET WINOA FOODS

    function handleFoodForm(e){
        setFoodFormData(e.target.value)
    }

    function handleFoodArray(array){
        setFoodArray([...foodArray, array])
        console.log(foodArray)
    }

    function handleFoodSubmit(e){
        e.preventDefault()
            fetch(`https://api.spoonacular.com/food/products/search?query=${foodFormData}&apiKey=f2fd8a85f941433faa917ece2c78ad80`)
            .then(res => res.json())
            .then(food => handleFoodArray(food.products))
    }



    return(
        <div>
            <Form onSubmit={handleFoodSubmit}>
                <input
                type="text"
                name="name"
                value={foodFormData}
                onChange={handleFoodForm}
                />
            <Button type='Submit'>Submit Food</Button>
            </Form>
        </div>
    )
}

export default WinoaFoodRater