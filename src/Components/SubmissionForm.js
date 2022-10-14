import React, {useState} from 'react'
import WinoaPhotoList from './WinoaPhotoList'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function SubmissionForm({putOnPage, submittedData, handleDeleteSubmission}){

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

        <div style={{backgroundColor:'peachpuff'}}>
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
        <WinoaPhotoList submittedData={submittedData} handleDeleteSubmission={handleDeleteSubmission}/>
        </div>
    )
}

export default SubmissionForm

// https://i.imgur.com/IhuFLXw.jpg
// https://i.imgur.com/kxsi0lI.jpg
// https://i.imgur.com/31uEVZl.jpg
// https://i.imgur.com/tgRMxQM.jpg
// https://i.imgur.com/vBnz4cr.jpg