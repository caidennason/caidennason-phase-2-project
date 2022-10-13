import React from 'react'
import Card from 'react-bootstrap/Card'

function About(){

    return(
        <div>
        <Card className="m-auto align-self-center"style={{width:'18rem'}}>
            <Card.Title className="m-auto align-self-center">Howdy from Cowboy Winoa</Card.Title>
            <Card.Img onClick={e => console.log('hi')}className='text-center'src="https://i.imgur.com/31uEVZl.jpg"></Card.Img>
        </Card>
        <h3>Winoa is a rescue dog who lives in Brooklyn, New York. She was born 4 years ago in Puerto Rico, and
            is a very sweet dog. She loves running through leaves, eating steak, and trying on new sweaters and 
            hats her mom gets her.
        </h3>
        </div>
    )
}

export default About