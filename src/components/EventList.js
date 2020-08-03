import React, { Component } from 'react';
import EventCard from './EventCard';

class EventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventsList:  this.props.fileEvents
            //allEventsList: this.props.allEvents
        }
        
    }
    
    componentDidMount() {
        //this.setState( { eventsList: this.props.fileEvents } )
        //this.setState( { allEventsList: this.props.allEvents } )
        //console.log(this.props.fileEvents);
        console.log("allEvents in EventList: ", this.state.allEventsList);
        //console.log("fileEvents in EventList: ", this.props.fileEvents);
        //console.log("allEvents in EventList: ", this.props.allEvents);
    }


    render() {

       const eventsListMap = this.state.eventsList.map( function(curr, index) {
            return <EventCard key={index}
                        cardEvents =  {curr}

                    />

       }  ) 
        return (
            <div className="EventList-main">
                {eventsListMap}
            </div>

        );
    }

}

export default EventList;