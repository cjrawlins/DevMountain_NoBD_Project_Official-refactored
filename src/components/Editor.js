import React, { Component } from 'react';
import axios from 'axios';
import EditEvent from './EditEvent';
import CreateEvent from './CreateEvent'

class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editedEvent: props.fileEvents,
            
            createEventDisplayed: false,
            
            eventsIdList: [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012],
            nextId: 1006,
            eventStatusOptions: ["New", "Categorized", "Classified", "Data Complete"],
            eventCatOptions: ["Uncategorized", "Alarm", "Nuisance", "False", "Test / Other"],
            eventClassOptions: ["Unclassified", "Person", "Vehicle", "Animal", "Plant/Wind", "Inanimate Object"]
        }
        

    }

    componentDidMount() {

    }


    calcEventIdList = () => {
       // let newListArr =  
    }
    


    editEvent = (eventId, eventStatus, eventCat, eventClass) => {
        let updatedEvent = {
            "eventId": eventId,
            "cameraInfo": {
                "name": "NW Building",
                "ip": "192.168.1.110",
                "location": "Corp. Campus",
                "model": "Axis Q4550-LE"
            },
            "eventInfo": {
                "imageURL": "./media/img1000.png",
                "timestamp": "2020-08-01T04:00:00.000Z",
                "eventStatus": eventStatus,
                "eventCat": eventCat,
                "eventClass": eventClass,
                "objObstructed": "Unknown",
                "notes": ""
            }
        }
        console.log("Updated Event: ", updatedEvent)

        console.log(`Attempting to Edit ID: ${eventId}`)
        axios.put(`/api/events/${eventId}`, updatedEvent)
           .catch( err => console.log(err))
        this.props.getAllEvents();
    }
    
    createEvent = (createdEvent) => {
        console.log("Updated Event to send from Editor: ", createdEvent)
        axios.post(`/api/events/`, createdEvent)
           .catch( err => console.log(err))
        
        let newIdlist = this.state.eventsIdList.push(this.state.nextId)
        this.setState( { eventIdList: newIdlist } );
        let newNextId = this.state.nextId + 1;
        this.setState( {nextId: newNextId} )
        this.props.getAllEvents();
    }


    deleteEvent = (eventId) => {
        console.log(`Attempting to delete ID: ${eventId}`)
        axios.delete(`/api/events/${eventId}`)
            .then(res => {
                this.setState({
                    edited: res.data
                })
            }).catch( err => console.log(err));
        this.props.getAllEvents();
    }
    

    toggleCreateEvent = () => {
        this.setState( ( { createEventDisplayed: true } ) )
        console.log("Create Event Selected")
    };
    toggleEditEvent = () => {
        this.setState( ( { createEventDisplayed: false } ) )
        console.log("Edit Event Selected")
    };

    render() {
        const { createEventDisplayed } = this.state;
        //console.log("Render Next ID: ", this.state.nextId);

        return (
            <div className="Editor-main">
                <div className="editor-top-button-container">
                    <button className={`editor-top-buttons ${createEventDisplayed ? "" : "button-selected"}`} 
                        onClick={this.toggleEditEvent}>EDIT
                        </button>
                    <button className={`editor-top-buttons ${createEventDisplayed ? "button-selected" : "" }`} 
                        onClick={this.toggleCreateEvent}>CREATE
                        </button>
                </div>
                { createEventDisplayed ? //Switch between CreateEvent and Edit Event
                <CreateEvent
                    eventsIdList = {this.state.eventsIdList}
                    editedEvent = {this.state.editedEvent}
                    eventIdList = {this.state.eventsIdList}
                    eventStatusOptions = {this.state.eventStatusOptions}
                    eventCatOptions = {this.state.eventCatOptions}
                    eventClassOptions = {this.state.eventClassOptions}
                    eventIdMap = {this.eventIdMap}
                    nextId = {this.state.nextId}
                    // Passed Functions // 
                    createEvent = {this.createEvent}
                    calcNextEventId = {this.calcNextEventId}        
                />
                :
                <EditEvent
                    // Passed Variables //
                    editedEvent = {this.state.editedEvent}
                    eventsIdList = {this.state.eventsIdList}
                    eventStatusOptions = {this.state.eventStatusOptions}
                    eventCatOptions = {this.state.eventCatOptions}
                    eventClassOptions = {this.state.eventClassOptions}
                    eventIdMap = {this.eventIdMap}
                    // Passed Functions // 
                    editEvent = {this.editEvent}
                    deleteEvent = {this.deleteEvent}
                />
                }
            </div>
        )
    }

}

export default Editor;