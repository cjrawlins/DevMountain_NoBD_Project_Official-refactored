const events = require('./data/noDB-json-test.json');



module.exports = {
    
    getEvents: (req, res) => {
        console.log("---API Call GET All Events---");
        res.header("Content-Type",'application/json');
        //res.status(200).send(events);
        res.status(200).send(JSON.stringify(events));
    },


    getEvent: (req, res) => {
        console.log("---API Call GET Event---");
        const { id } = req.params;
        console.log(`Looking for Event ${id}`);
        let found = false;
        let singleEvent = {};
        const index = parseInt(req.params.id);
        // Find index of passed param
        for (i = 0 ; i < events.length; i++ ) {
            if ( events[i].eventId == index ) { 
                //events.splice(i, 1, eventData);
                //singleEvent = events[index].eventId;
                console.log("Single Event: ",singleEvent.eventId);
                console.log(`Event ${index} found at index ${i} and updated`);
                res.status(200).send(events);
                found = true;
            }    
        } // Report if found and send status
        if (found === true ) { 
            console.log("found");
            //res.status(200).send(singleEvent) 
        } else { 
            res.status(404).send('Event Not Found'); 
            console.log(`Event ${index} Not Found`);
        }
    },
    
    createEvent: (req, res) => { 
        console.log("---API Call Create Event---");
        const eventData = req.body;
        events.push(eventData);
        //res.header("Content-Type",'application/json');
        res.status(200).send(events)
        console.log(`Event ${eventData.eventId} Created`);
    },

    updateEvent: (req, res) => {
        console.log("---API Call Update Event---");
        let found = false;
        const eventData = req.body;
        console.log("Request Body: ", eventData)
        const index = parseInt(req.params.id);
        // Find index of passed param
        for (i = 0 ; i < events.length; i++ ) {
            if ( events[i].eventId == index ) { 
                events.splice(i, 1, eventData);
                console.log(`Event ${index} found at index ${i} and updated`);
                found = true;
            }    
        } // Report if found and send status
        if (found === true ) { 
            res.status(200).send(events) 
        } else { 
            res.status(404).send('Event Not Found'); 
            console.log(`Event ${index} Not Found`);
        }
    },

    deleteEvent: (req, res) => {
        console.log("---API Call Delete Event---");
        let found = false;
        const index = parseInt(req.params.id);
        // Find index of passed param
        for (i = 0 ; i < events.length; i++ ) {
            if ( events[i].eventId == index ) { 
                events.splice(i, 1);
                console.log(`Event ${index} found at index ${i} and deleted`);
                found = true;
            }    
        } // Report if found and send status
        if (found === true ) { 
            res.status(200).send(events) 
        } else { 
            res.status(404).send('Event Not Found'); 
            console.log(`Event ${index} Not Found`);
        }
    },

    getQuery: (req, res) => {
        for (const key in req.query) {
        console.log("Incoming Query ", req.query);
        console.log("Incoming Query Key ", req.query[key]);
        console.log("Incoming Query Value", req.query);
        }
    }


// End Module Exports
}