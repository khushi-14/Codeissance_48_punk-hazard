const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//set the static path
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json())

const publicVapidKey = 'BL42U0ytyF3MmvfMq6B6PT3EHMUzIftlKVB_mqJJA8zKIuoa91-otQVxGpFRpdxwKDaatAjBuvL_mkZ99ZsfyRo';
const privateVapidKey = 'gSJThoNubY-pH4hRajgGJHEOhOJSkjidP9Xly5uVe4A';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey,privateVapidKey);

//subscribe route
app.post('/subscribe', (req, res)=>{
    //get push subscription object
    const subscription = req.body;

    //send status 201
    res.status(201).json({})

    //create paylod
    const payload = JSON.stringify({title: 'Node Js Push Notification' });

    //pass the object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err=> console.error(err));
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`server started on ${port}`)
});