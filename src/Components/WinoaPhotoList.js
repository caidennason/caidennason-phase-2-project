import React from "react";
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button'
import WinoaPhotoItem from "./WinoaPhotoItem";

function WinoaPhotoList({submittedData, handleDeleteQuestion}){
    
    return(
        
        <div>
           {submittedData.map((data) => {
               return <WinoaPhotoItem submittedData={submittedData} description={data.description} data={data} link={data.link} key={data.id} id={data.id} handleDeleteQuestion={handleDeleteQuestion}/>
           })}
        </div>
    )
}

export default WinoaPhotoList