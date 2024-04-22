var express = require('express')
require("dotenv").config();
var app = express()
var WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port: 40511})
const { MongoClient } = require('mongodb');
const cron = require('node-cron');
const {DB_AUTH_URL,JWT_SECRET_KEY}=require("./config/key")
const jwt = require('jsonwebtoken');

const jwtSecretKey=JWT_SECRET_KEY;
wss.on('connection', async (ws) =>{
    
        // setInterval(
        //     () => {ws.send(JSON.stringify(final_array))},
        //     3000
        // )
        
        // cron.schedule('*/10 * * * * *', async () => {
        // Connect to MongoDB
        const client = new MongoClient(DB_AUTH_URL, {});
        await client.connect();
        // Access the database and collection
        const db = client.db('marketv2');
        const collection = db.collection('scripts');
        // Query MongoDB for data and send it to the client
        const cursor = collection.find(); // You can add your query conditions here
        var final_array=[];
        await cursor.forEach((document) => {
            if(document.id=="MCX#SILVERM#30/08/2024"){
                final_array.push(document)
            }
        });
        // console.log(JSON.stringify(final_array));
        // final_array
        ws.send(JSON.stringify(final_array));
    // });

})
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    // res.send("Testing from the node service.");

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use(require("./src/routes/common.route"));
