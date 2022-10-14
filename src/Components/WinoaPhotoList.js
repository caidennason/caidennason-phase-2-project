import React from "react";
import WinoaPhotoItem from "./WinoaPhotoItem";

function WinoaPhotoList({submittedData, handleDeleteSubmission}){
    
    return(
        
        <div style={{backgroundColor:'peachpuff'}}>
           {submittedData.map((data) => {
               return <WinoaPhotoItem submittedData={submittedData} description={data.description} data={data} link={data.link} key={data.id} id={data.id} handleDeleteSubmission={handleDeleteSubmission}/>
           })}
        </div>
    )
}

export default WinoaPhotoList