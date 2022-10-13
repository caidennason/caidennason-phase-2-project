import React from "react"
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button'

function WinoaPhotoItem({submittedData, description, link, handleDeleteQuestion, id, data}){

    function handleDeleteRequest(){
        fetch(`http://localhost:3000/winoaResponses/${id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(() => console.log(`deleted ${id}!`))
        .then(() => handleDeleteQuestion(submittedData))
    }

    return(
        <Card className="m-auto align-self-center"key={id} bg='dark' style={{width:'18rem'}}>
            <Card.Title style={{color:'peachpuff'}}>Here's submission {id}!</Card.Title>
            <Card.Text style={{color:'peachpuff'}}>{description}</Card.Text>
            <Card.Img style={{color:'peachpuff'}} src={link} alt="dog photo"/>
            <Button onClick={handleDeleteRequest}>Delete</Button>
            <br></br>
        </Card>
    )
}

export default WinoaPhotoItem