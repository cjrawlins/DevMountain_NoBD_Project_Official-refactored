const express = require('express');
const ctrl = require('./controller.js');
const app = express();
const port = 5000;

app.use(express.json());


//---------------Endpoints---------------//
// Read All Events //
app.get("/api/events", ctrl.getEvents);
// Read Single Event
app.get("/api/events/:id", ctrl.getEvent);
// Create Event //
app.post("/api/events", ctrl.createEvent);
// Update Event //
app.put("/api/events/:id", ctrl.updateEvent);
// Delete Event //
app.delete("/api/events/:id", ctrl.deleteEvent);

// ---Queries--- //
app.get("/api/events", ctrl.getEvents);


app.listen(port, () => console.log(`Server listening on port: ${port}`));