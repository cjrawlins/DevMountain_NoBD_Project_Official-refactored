import React from 'react';

function CreateEvent(props) {
    

  function handleSaveClick() {

    let createdEvent = {
      "eventId": 1200,
      "cameraInfo": {
        "name": "",
        "ip": "",
        "location": "",
        "model": ""
      },
      "eventInfo": {
        "imageURL": "./media/img1005.png",
        "timestamp": "2020-08-01T04:00:05.000Z",
        "eventStatus": "Data Complete", 
        "eventCat": "Alarm",
        "eventClass": "Person",
        "objObstructed": "Unknown",
        "notes": "Test Notes"
      }
    }
    console.log('Update Props Next ID: ', props.nextId)
    createdEvent.eventId = props.nextId;
    createdEvent.cameraInfo.name = document.getElementById("select-name").value;
    createdEvent.cameraInfo.ip = document.getElementById("select-ip").value;
    createdEvent.cameraInfo.location = document.getElementById("select-location").value;
    createdEvent.cameraInfo.model = document.getElementById("select-model").value;
    createdEvent.eventInfo.imageURL = document.getElementById("select-imageURL").value;
    createdEvent.eventInfo.imageURL = String(`./media/img${props.nextId}.png`);
    createdEvent.eventInfo.eventStatus = document.getElementById("select-eventStatus").value;
    createdEvent.eventInfo.eventCat = document.getElementById("select-eventCat").value;
    createdEvent.eventInfo.eventClass = document.getElementById("select-eventClass").value; 

    console.log("Save Button Clicked")
    console.log("Saved New Event to Array in CreateEvent", createdEvent);
    props.createEvent(createdEvent);
  }


  return (
    <div className="CreateEvent-main">
      <header className="card-header">  
        <h2 className="card-icon">CREATE</h2>
        <h2 className="card-title">{`Event ID: ${props.nextId}`}</h2>
        <h2 className="card-x">X</h2>
      </header>
      <div className="editor-image-container">
        <img src="./media/img1001.png" alt="event" className="card-image" ></img>
      </div>
      <div className="editor-body">
          <div className="cam-info-container info-container">
                <h6 className="info info-title">Creating Event:</h6>
                <input className="editor-selectId info info-data" value={`${props.nextId}`} disabled={true} ></input>
                
                <h6 className="info info-title">Camera Name:</h6>
                <input className="info info-data" id="select-name" defaultValue={props.editedEvent[0].cameraInfo.name}></input>
              
                <h6 className="info info-title">IP Address:</h6>
                <input className="info info-data" id="select-ip" defaultValue={props.editedEvent[0].cameraInfo.ip}></input>
              
                <h6 className="info info-title">Site / Location:</h6>
                <input className="info info-data" id="select-location" defaultValue={props.editedEvent[0].cameraInfo.location}></input>
              
                <h6 className="info info-title">Manufacturer/Model:</h6>
                <input className="info info-data" id="select-model" defaultValue={props.editedEvent[0].cameraInfo.model}></input>
                
                <h6 className="info info-title">Image URL:</h6>
                <input className="info info-data" id="select-imageURL" defaultValue={`./media/${props.nextId}.png`}></input>

          </div>
          <div className="event-info-container info-container">
                
                <h6 className="info info-title">Select Status:</h6>
                <select className="editor-selectId info info-data" id="select-eventStatus">
                    <option value={props.eventStatusOptions[0]}>{props.eventStatusOptions[0]}</option>
                    <option value={props.eventStatusOptions[1]}>{props.eventStatusOptions[1]}</option>
                    <option value={props.eventStatusOptions[2]}>{props.eventStatusOptions[2]}</option>
                    <option value={props.eventStatusOptions[3]}>{props.eventStatusOptions[3]}</option>
                </select>
                
                <h6 className="info info-title">Select Category:</h6>
                <select className="editor-selectId info info-data" id="select-eventCat">
                    <option value={props.eventCatOptions[0]}>{props.eventCatOptions[0]}</option>
                    <option value={props.eventCatOptions[1]}>{props.eventCatOptions[1]}</option>
                    <option value={props.eventCatOptions[2]}>{props.eventCatOptions[2]}</option>
                    <option value={props.eventCatOptions[3]}>{props.eventCatOptions[3]}</option>
                    <option value={props.eventCatOptions[4]}>{props.eventCatOptions[4]}</option>
                </select>
                
                <h6 className="info info-title">Select Classification:</h6>
                <select className="editor-selectId info info-data" id="select-eventClass">
                    <option value={props.eventClassOptions[0]}>{props.eventClassOptions[0]}</option>
                    <option value={props.eventClassOptions[1]}>{props.eventClassOptions[1]}</option>
                    <option value={props.eventClassOptions[2]}>{props.eventClassOptions[2]}</option>
                    <option value={props.eventClassOptions[3]}>{props.eventClassOptions[3]}</option>
                    <option value={props.eventClassOptions[4]}>{props.eventClassOptions[4]}</option>
                    <option value={props.eventClassOptions[5]}>{props.eventClassOptions[5]}</option>
                </select>
          </div>
        
        <div className="button-container">
          <button className="editor-buttons" onClick={handleSaveClick} >Save</button>
          {/* <button className="editor-buttons">Cancel</button>
          <button className="editor-buttons">Delete</button> */}
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;