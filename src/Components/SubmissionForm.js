import React, {useState, useEffect} from 'react'
import WinoaPhotoList from './WinoaPhotoList'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
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
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        })
        .then((resp) => resp.json())
        .then((submittedWinoaObject) => putOnPage(submittedWinoaObject)) // get new question added to the array that already exists
      }
      
    
    return(

        <div>
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
        </Form>
        <WinoaPhotoList submittedData={submittedData} handleDeleteQuestion={handleDeleteQuestion}/>
        <WinoaPhotoItem submittedData={submittedData} />
        </div>
    )
}

export default SubmissionForm






// const submittedWinoaObject = submittedData.map((obj, idx) => {
//     return (<Card bg='dark'style={{width:'18rem'}} className='mb-2'key={idx}>
//         <Card.Title style={{color:'peachpuff'}}>What a great Winoa!</Card.Title>
//         <Card.Text style={{color:'peachpuff'}}>{obj.formDescription}</Card.Text>
//         <Card.Img src={obj.formLink}/>  {/*need to put src link here */}
//         <br></br>
//     </Card>
//     )
// })

{/* <Form style={{textAlign:'center'}} onSubmit={handlePostSubmit}>
            <input type='text' onChange={handleFormDescription} value={formDescription} onClick={() => setFormDescription('')}/>
            <input type='text' onChange={handleFormLink} value={formLink}/>
            <Button type="submit" value='Submit'>Submit</Button>
        </Form>
        <h3>Winoa Data Object</h3>
        <WinoaPhotoList submittedWinoaObject={submittedWinoaObject}/> */}

    
    // function handleSubmit(event) {
    //     const formData = { formDescription: formDescription, formLink: formLink };
    //     const dataArray = [...submittedData, formData];
    //     setSubmittedData(dataArray);
    //     submittedData={submittedData}console.log(submittedData)
    //     setFormDescription("Description");
    //     setFormLink("Link");
    //   }