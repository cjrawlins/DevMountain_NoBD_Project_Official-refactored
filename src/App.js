import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import eventsJSON from './noDB-json-test.json';


// Import Other Components //
import EventList from './components/EventList';
import Editor from './components/Editor';



class App extends Component {
  constructor() {
    super();

    this.state = {
      allEvents: [],
      fileEvents: eventsJSON
    

    }
  }


componentDidMount() {
  this.getAllEvents();
  console.log('Trying to get All Events');
  
}

getAllEvents = () => {
  axios.get('/api/events')
    .then( res => { 
      this.setState( { allEvents: res.data } )
      //console.log("API Events in GET", this.state.allEvents);
      console.log("API Events 0 in GET", this.state.allEvents[0].eventId);
    } 
    ).catch( err => console.log("Error",err) )
    

};





render() {

    //console.log("API All Events in render: ", this.state.allEvents);
    //console.log("File Events in render: ", this.state.fileEvents);
    //console.log("Initial Events in render: ", this.state.initialEvents[0]);
    //console.log( JSON.parse(JSON.stringify( this.state.initialEvents ) )[0] );
    // console.log("API Events in render1-Id: ", this.state.allEvents[1]);
    // console.log("File Events in render1-Id: ", this.state.fileEvents[1].cameraInfo.name);

    return (
    <div className="App-main">
      <header className="header-wrapper">
        <div className="header-content">
          <img src="./alert-event-icon.png" alt="alert-event-icon" className="header-image"></img>
          <h1 className="header-title">Alert Image Classifier</h1>
        </div>
      </header>
      <main className="main-wrapper">
        <EventList
          allEvents = {this.state.allEvents}
          fileEvents = {this.state.fileEvents}
        />
        <Editor
          allEvents = {this.state.allEvents}
          fileEvents = {this.state.fileEvents}
        />
      </main>
    </div>
  )};
}

export default App;
