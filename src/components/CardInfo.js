import React from 'react';

function CardInfo(props) {
  
  
  
  return (
    <div className="CardInfo-main">
     <div className="camera-info info-box">
       <div className="info-line-pairs">
         <h5 className="box-title">Camera Info</h5>

         <h6 className="info info-title">Camera Name:</h6>
         <p className="info info-data">{props.name}</p>
         
         <h6 className="info info-title">IP Address:</h6>
         <p className="info info-data">{props.ip}</p>
         
         <h6 className="info info-title">Site / Location:</h6>
         <p className="info info-data">{props.location}</p>
         
         <h6 className="info info-title">Make/Model:</h6>
         <p className="info info-data">{props.model}</p>

       </div>
     </div>
     <div className="event-info info-box">
      <div className="info-line-pairs">
          <h5 className="box-title">Event Info</h5>

          <h6 className="info info-title">Event Status:</h6>
          <p className="info info-data">{props.eventStatus}</p>
          <h6 className="info info-title">Classification:</h6>
          <p className="info info-data">{props.eventCat}</p>
          <h6 className="info info-title">Category:</h6>
          <p className="info info-data">{props.eventClass}</p>
          <h6 className="info info-title">Obj. Obstructed:</h6>
          <p className="info info-data">{props.objObstructed}</p>
      </div>
     </div>
    </div>
  );
}

export default CardInfo;
