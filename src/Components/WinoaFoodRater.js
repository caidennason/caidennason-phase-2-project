import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'

function WinoaFoodRater(){

    const [foodFormData, setFoodFormData] = useState('')

    // GET WINOA FOODS

    function handleFoodForm(e){
        setFoodFormData(e.target.value)
        console.log(e.target.value)
    }

    function handleFoodSubmit(){
        
    }

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${foodFormData}`)
        .then(res => res.json())
        .then(food => console.log(food))
    }, [])

    return(
        <div>
            <Form>
                <input
                type="text"
                name="name"
                value={foodFormData}
                onChange={handleFoodForm}
                />
            </Form>
        </div>
    )

}

export default WinoaFoodRater