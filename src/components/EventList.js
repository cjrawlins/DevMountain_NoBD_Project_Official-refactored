import React, { Component } from 'react';
import EventCard from './EventCard';

class EventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventsList: []
        }
        
    }
    
    render() {

       const eventsListMap = this.props.allEvents.map( function(curr, index) {
            return <EventCard key={index}
                        cardEvents =  {curr}
                    />

       }  ) 
        return (
            <div>
                <div className="EventList-top-button-container">
                    <button className="list-top-buttons" 
                        onClick={this.toggleEditEvent}>NEW
                        </button>
                    <button className="list-top-buttons" 
                        onClick={this.toggleCreateEvent}>ALL
                        </button>
                </div>
                <div className="EventList-main" >
                    {eventsListMap}
                </div>
                
            </div>

        );
    }

}

export default EventList;