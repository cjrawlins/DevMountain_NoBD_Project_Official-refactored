import React, { Component } from 'react';
import axios from 'axios';
import EditEvent from './EditEvent';
import CreateEvent from './CreateEvent'

class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editedEvent: props.fileEvents,
            eventsIdList: [1000, 1001, 1002, 1003, 1004, 1005],
            nextId: 1100,
            eventStatusOptions: ["New", "Categorized", "Classified", "Data Complete"],
            eventCatOptions: ["Uncategorized", "Alarm", "Nuisance", "False", "Test / Other"],
            eventClassOptions: ["Unclassified", "Person", "Vehicle", "Animal", "Plant/Wind", "Inanimate Object"]
        }
        

    }

    calcNextEventId = () => {
    
        let nextId = this.state.eventsIdList.length + 1000; 
        console.log("nextId: ",nextId);
        this.setState( { nextId: nextId } );
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
    }
    
    createEvent = (newEvent) => {

        console.log("Updated Event: ", newEvent)

        console.log(`Attempting to Add ID: ${this.state.nextId}`)
        axios.post(`/api/events/`, newEvent)
           .catch( err => console.log(err))

        let newNextId = this.state.next + 1;
        this.setState( {nextid: newNextId} )
        console.log("Next Event will have ID: ", newEvent.eventId);
    }


    deleteEvent = (eventId) => {
        console.log(`Attempting to delete ID: ${eventId}`)
        axios.delete(`/api/events/${eventId}`)
            .then(res => {
                this.setState({
                    edited: res.data
                })
            }).catch( err => console.log(err))
    }



    render() {


        return (
            <div className="Editor-main">
                <EditEvent
                    // Passed Variables //
                    editedEvent = {this.state.editedEvent}
                    eventsIdList = {this.state.eventsIdList}
                    eventIdList = {this.state.eventsIdList}
                    eventStatusOptions = {this.state.eventStatusOptions}
                    eventCatOptions = {this.state.eventCatOptions}
                    eventClassOptions = {this.state.eventClassOptions}
                    eventIdMap = {this.eventIdMap}
                    // Passed Functions // 
                    editEvent = {this.editEvent}
                    deleteEvent = {this.deleteEvent}
                />
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
                    createEvent = {this.editEvent}
                    calcNextEventId = {this.calcNextEventId}        
                />
            </div>
        )
    }

}

export default Editor;