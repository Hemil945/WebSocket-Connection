var express = require('express')
require("dotenv").config();
var app = express()
var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({port: 40513})
const { MongoClient } = require('mongodb');
const cron = require('node-cron');
const {DB_AUTH_URL,JWT_SECRET_KEY}=require("./config/key")
const jwt = require('jsonwebtoken');

const jwtSecretKey=JWT_SECRET_KEY;
wss.on('connection', async (ws,req) =>{
    const token = req.headers['sec-websocket-protocol'];
    // console.log(req.headers['sec-websocket-protocol'])
    // console.log(req.headers,'req.headers')
    if (!token) {
        console.log('Unauthorized: Token not provided');
        ws.close();
        return;
    }
    const decoded = jwt.verify(token, jwtSecretKey);;
    if (!decoded) {
        console.log('Unauthorized: Invalid token');
        ws.close();
        return;
    }

    console.log('Authenticated user:', decoded);

    // Handle messages from client
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    // setInterval(
        //     () => {ws.send(JSON.stringify(final_array))},
        //     3000
        // )
        
    // cron.schedule('*/10 * * * * *', async () => {
    //     // Connect to MongoDB
    //     const client = new MongoClient(DB_AUTH_URL, {});
    //     await client.connect();
    //     // Access the database and collection
    //     const db = client.db('sample_mflix');
    //     const collection = db.collection('users');
    //     // Query MongoDB for data and send it to the client
    //     const cursor = collection.find(); // You can add your query conditions here
    //     var final_array=[];
    //     await cursor.forEach((document) => {
    //         document.current_date_time=new Date();
    //         final_array.push(document)
    //     });
    //     ws.send(JSON.stringify(final_array));
    // });

})
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/indexxx.html');  
    // res.send("Testing from the node service.");

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use(require("./src/routes/common.route"));
