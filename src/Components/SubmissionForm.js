import React, {useState} from 'react'
import WinoaPhotoList from './WinoaPhotoList'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import WinoaPhotoItem from './WinoaPhotoItem';

function SubmissionForm({putOnPage, submittedData, handleDeleteQuestion}){

    const [formDescription, setFormDescription] = useState('Description')
    const [formLink, setFormLink] = useState('Link')

    function handleFormDescription(e){
        setFormDescription(e.target.value)
    }

    function handleFormLink(e){
        setFormLink(e.target.value)
    }
    
      function handlePostSubmit(event) {
        event.preventDefault();
        const formData = {
            description: formDescription, 
            link: formLink
        }
        fetch('http://localhost:3000/winoaResponses', {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        })
        .then((resp) => resp.json())
        .then((submittedWinoaObject) => putOnPage(submittedWinoaObject))
        .then(() => setFormDescription('Description'))
        .then(() => setFormLink('Link'))
      }
      
    
    return(

        <div style={{background:'peachpuff'}}>
        <Form onSubmit={handlePostSubmit}>
            <input
            type='text'
            name='name'
            value={formDescription}
            onChange={handleFormDescription}
            />
            <input 
            type='text'
            name='name'
            value={formLink}
            onChange={handleFormLink}
            />
            <Button type='submit'>Submit</Button>
            <br></br>
            <br></br>
        </Form>
        <WinoaPhotoList submittedData={submittedData} handleDeleteQuestion={handleDeleteQuestion}/>
        </div>
    )
}

export default SubmissionForm