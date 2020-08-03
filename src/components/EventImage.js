import React from 'react'



function EventImage(props) {
  return (
    <div className="EventImage-main">
      <img className="card-image" alt="event" src={props.imageURL}></img>
    </div>
  );
}

export default EventImage;