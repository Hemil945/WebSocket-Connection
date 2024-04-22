var express = require('express')
require("dotenv").config();
var app = express()
var WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 40511 })
const { MongoClient } = require('mongodb');
const cron = require('node-cron');
const { DB_AUTH_URL, JWT_SECRET_KEY } = require("./config/key")
const jwt = require('jsonwebtoken');
const clients = new Map();

const jwtSecretKey = JWT_SECRET_KEY;
wss.on('connection', async (ws) => {
    const clientId = Math.floor(100000000 + Math.random() * 900000000);
    clients.set(clientId, ws);

    ws.on('message', async (message) => {
        message=JSON.parse(message)
        console.log(message);
        console.log(clientId);
        
        console.log('Client connected');
        const client = new MongoClient(DB_AUTH_URL, {});
        await client.connect();
        // Access the database and collection
        const db = client.db('marketv2');
        if(message.topic=='/topic/watch/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/watch/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                // console.log(message,'message');
                var final_array = [];
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/login'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/profile/add'){
            const collection = db.collection('scripts');
            setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/profile/delete'){
            const collection = db.collection('scripts');
            setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/profile/setdefault'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/profile/addscript'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/profile/removescript'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/profile/updateitems'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/gethighlow'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/getholidays'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/topic/index/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/setfont'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/setfont/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/gethistorydates'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/gethistorydates'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/gethistory'){
            const collection = db.collection('history');

        setInterval(
            async () => {
                var final_array = [];
                const result = collection.find({ "script._id": { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/gethistory'){
            const collection = db.collection('history');

        setInterval(
            async () => {
                var final_array = [];
                const result = collection.find({ "script._id": { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/profile/add/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/profile/delete/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/profile/setdefault/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/profile/addscript/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/profile/removescript/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/profile/updateitems/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/index/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/gethighlow'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/getholidays'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/updatecolumns/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/updatecolumns'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/getclosing'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/getclosing'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/updatesettings'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/updatesettings/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/changepassowrd'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/changepassowrd'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/signup'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/signup'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/user/topic/forgotpassword'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/forgotpassword'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }else if(message.topic=='/app/topic/watch/'){
            const collection = db.collection('scripts');
        setInterval(
            async () => {
                var final_array = [];
                
                // Query MongoDB for data and send it to the client
                const result = collection.find({ id: { $in: message.topicIds } })
                await result.forEach((document) => {
                    if (document) {
                        final_array.push(document)
                    }
                });
                ws.send(JSON.stringify(final_array));
            },
            3000
        )

        }
        
        
        
    });
    ws.on('close', function () {
        console.log('Client disconnected');
        // Perform cleanup or other actions if needed
    });
})
app.get('/', function (req, res) {
    console.log(__dirname,'__dirname')
    // res.sendFile(__dirname + '/app3.html');
    res.sendFile(__dirname + '/app2.html');
    // res.send("Testing from the node service.");

})
app.get('/app3.html', function (req, res) {
    console.log(__dirname,'__dirname')
    res.sendFile(__dirname + '/app3.html');
    // res.sendFile(__dirname + '/app2.html');
    // res.send("Testing from the node service.");

})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.use(require("./src/routes/common.route"));
