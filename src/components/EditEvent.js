import React from 'react';

function EditEvent(props) {
  
  let selectedId = 0;
  let selectedStatus = "";
  let selectedCat = "";
  let selectedClass = ""

  
  function getSelectedId() {
    selectedId = document.getElementById("select-eventId").value;
    console.log("Selected ID: ", selectedId);
  }

  function handleSaveClick() {
    console.log("Save Button Clicked")
    selectedStatus = document.getElementById("select-eventStatus").value;
    selectedCat = document.getElementById("select-eventCat").value;
    selectedClass = document.getElementById("select-eventClass").value;
    props.editEvent(selectedId, selectedStatus, selectedCat, selectedClass);
  }
  
  return (
    <div className="EditEvent-main">
      <header className="card-header">  
        <h2 className="card-icon">EDIT</h2>
        <h2 className="card-title">{`Event ID: ${selectedId}`}</h2>
        <h2 className="card-x">X</h2>
      </header>
      <div className="editor-image-container">
        <img src="./media/img_1001.png" alt="eventImage" className="card-image" ></img>
      </div>
      <div className="editor-body">
        
        <div className="cam-info-container info-container">
                <h6 className="info info-title">Camera Name:</h6>
                <p className="info info-data">{props.editedEvent[0].cameraInfo.name}</p>
              
                <h6 className="info info-title">IP Address:</h6>
                <p className="info info-data">{props.editedEvent[0].cameraInfo.ip}</p>
              
                <h6 className="info info-title">Site / Location:</h6>
                <p className="info info-data">{props.editedEvent[0].cameraInfo.location}</p>
              
                <h6 className="info info-title">Manufacturer/Model:</h6>
                <p className="info info-data">{props.editedEvent[0].cameraInfo.model}</p>
          </div>

        <div className="event-info-container info-container">
            <h6 className="info info-title">Select ID to edit:</h6>
            <select className="editor-selectId info info-data" id="select-eventId"
              onChange={getSelectedId}
            >
                <option value="0">{"Select ID to Edit"}</option>
                <option value={props.eventIdList[0]}>{props.eventIdList[0]}</option>
                <option value={props.eventIdList[1]}>{props.eventIdList[1]}</option>
                <option value={props.eventIdList[2]}>{props.eventIdList[2]}</option>
                <option value={props.eventIdList[3]}>{props.eventIdList[3]}</option>
                <option value={props.eventIdList[4]}>{props.eventIdList[4]}</option>
                <option value={props.eventIdList[5]}>{props.eventIdList[5]}</option>
            </select>
            
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
          <button className="editor-buttons">Cancel</button>
          <button className="editor-buttons" onClick={ () => props.deleteEvent(selectedId)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default EditEvent;