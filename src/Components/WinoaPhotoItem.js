import React, {useState} from "react"
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button'

function WinoaPhotoItem({submittedData, description, link, handleDeleteQuestion, id, data}){

const [loveState, setLoveState] = useState(false)
const [loveContent, setLoveContent] = useState('Love')
const [likeContent, setLikeContent] = useState('Like')
const [likeState, setLikeState] = useState(false)

    function handleDeleteRequest(){
        fetch(`http://localhost:3000/winoaResponses/${id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(() => console.log(`deleted ${id}!`))
        .then(() => handleDeleteQuestion(data))
    }

    function handleLoveClick(){
        if (loveState === false){
            setLoveState(true)
            setLoveContent('You love Winoa!')
        } else {
            setLoveState(false)
            setLoveContent('Love')
        }
    }
    
    function handleLikeClick(){
        if (likeState === false){
            setLikeState(true)
            setLikeContent('Would be better if you loved her ...')
        } else {
            setLikeState(false)
            setLikeContent('Like')
        }
    }


    return(
        <Card className="m-auto align-self-center"key={id} bg='dark' style={{width:'18rem'}}>
            <Card.Title style={{color:'peachpuff'}}>Here's submission {id}!</Card.Title>
            <Card.Text style={{color:'peachpuff'}}>{description}</Card.Text>
            <Card.Img style={{color:'peachpuff'}} src={link} alt="dog photo"/>
            <Button onClick={handleLoveClick} style={{color: loveState ? 'red' : 'white'}}>{loveContent}</Button>
            <Button onClick={handleLikeClick} style={{color: likeState ? 'red' : 'white'}}>{likeContent}</Button>
            <Button onClick={handleDeleteRequest}>Delete</Button> 
            <br></br>
            <br></br>
        </Card>
    )
}

export default WinoaPhotoItem