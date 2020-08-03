import React from 'react';
import CardInfo from './CardInfo';
import EventImage from "./EventImage";

function EventCard(props) {
  
  let cardData = props.cardEvents;

  let cardId = cardData.eventId;
  let cardTimestamp = cardData.eventInfo.timestamp;
  
  // <h2 className="card-x" onClick={props.deleteCard(cardId)}>X</h2>
  
  return (
    <div className="EventCard-main">
      <div className="card-header">
        <h2 className="card-icon">{cardTimestamp}</h2>
        <h2 className="card-title">{`Event ID: ${cardId}`}</h2>
        <h2 className="card-x">X</h2>
      </div>
      <div className="card-body">
        <CardInfo 
          eventId = {cardData.eventId}
          name = {cardData.cameraInfo.name}
          ip = {cardData.cameraInfo.ip}
          location = {cardData.cameraInfo.location}
          model = {cardData.cameraInfo.model}
          timestamp = {cardData.eventInfo.timestamp}
          eventStatus = {cardData.eventInfo.eventStatus}
          eventCat = {cardData.eventInfo.eventCat}
          eventClass = {cardData.eventInfo.eventClass}
          objObstructed = {cardData.eventInfo.objObstructed}
          notes = {cardData.eventInfo.notes}
          
        />
        <EventImage
          imageURL = {cardData.eventInfo.imageURL}
        />
      </div>
    </div>
  );
}

export default EventCard;