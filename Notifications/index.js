const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//set the static path
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json())

const publicVapidKey = 'BKOEWydKLUsPk3Z14L5vItv3pRwBluxpYRlnz5krTw6pU0NDISIZ8-xZ78_AH_MJsY-hloygx-F-ZH1hitb0Uko';
const privateVapidKey = 'cOCzAzStNWrcgSytNSMN2EbVY_f8VFh-1qxS4KBp-TM';

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