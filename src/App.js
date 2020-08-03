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
    } 
    ).catch( err => console.log("Error",err) )
};



render() {

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
          getAllEvents = {this.getAllEvents}
        />
      </main>
    </div>
  )};
}

export default App;
