import React from "react";
import WinoaPhotoItem from "./WinoaPhotoItem";

function WinoaPhotoList({submittedData, handleDeleteQuestion}){
    
    return(
        
        <div style={{backgroundColor:'peachpuff'}}>
           {submittedData.map((data) => {
               return <WinoaPhotoItem submittedData={submittedData} description={data.description} data={data} link={data.link} key={data.id} id={data.id} handleDeleteQuestion={handleDeleteQuestion}/>
           })}
        </div>
    )
}

export default WinoaPhotoList