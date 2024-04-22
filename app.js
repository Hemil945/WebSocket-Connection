const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
require("./src/connection/db");
const i18n = require("./src/i18n/i18n");
const cors = require("cors");
const { MongoClient } = require('mongodb');
const cron = require('node-cron');

const { DB_AUTH_URL, JWT_SECRET_KEY } = require("./config/key")
const scriptModel = require('./src/model/script.model')

const PORT = process.env.PORT || 3001;
// Map to store topic-wise connections
const topicConnections = new Map();
io.on('connection', (socket) => {
  console.log('A user connected');
  let intervalId;

  // Handle subscription to the topic
  socket.on('/topic/watch/', async (topic) => {
    console.log(topic, 'topic1111');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    // console.log(`Subscribed to topic: ${topic}`);
    // cron.schedule('*/3 * * * * *', async () => {
    //   console.log('1');


    // const collection = await scriptModel.find();
    // console.log(collection,'collection')
    // Query MongoDB for data and send it to the client
    // const cursor = collection.find(); // You can add your query conditions here
    
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )
    // for (const element of topic.topicIds) {
    //   const result = await collection.findOne({ id: element });
    //   if(result){
    //     final_array.push(result)
    //   }

    // }
    // console.log(final_array,"final_array")
    // });
    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/watch/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/login', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/profile/add', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/profile/add', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/profile/delete/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/profile/delete', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/profile/setdefault/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/profile/setdefault', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/profile/addscript/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/profile/addscript', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/profile/removescript/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/profile/removescript', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/profile/updateitems/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/profile/updateitems', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/gethighlow', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/gethighlow', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/getholidays', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/getholidays', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/topic/index/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/index/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/setfont/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/setfont', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/gethistorydates', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/gethistorydates', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/gethistory', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('history');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ "script._id": { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        // console.log(final_array)
        // return
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/gethistory', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/updatecolumns/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/updatecolumns', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/getclosing', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/getclosing', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/updatesettings', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/updatesettings/', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/changepassowrd', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/changepassowrd', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/signup', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/signup', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/user/topic/forgotpassword', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )

    

  });
  // Handle subscription to the topic
  socket.on('/app/topic/forgotpassword', async (topic) => {
    console.log(topic, 'topic');
    socket.join(topic);
    // Add the socket to the topicConnections map
    if (!topicConnections.has(topic)) {
      topicConnections.set(topic, new Set());
    }
    topicConnections.get(topic).add(socket.id);
    console.log(topicConnections);
    console.log(socket.id);
    var final_array = [];
    const client = new MongoClient(DB_AUTH_URL, {});
    await client.connect();
    // Access the database and collection
    const db = client.db('marketv2');
    const collection = db.collection('scripts');
    intervalId=setInterval(
      async () => {
        var final_array = [];
        const result = collection.find({ id: { $in: topic.topicIds } })
        console.log('1')
        await result.forEach((document) => {
          if (document) {
            final_array.push(document)
          }
        });
        socket.emit('message', final_array);

      },
      3000
    )


  });

  socket.on('unSubscribe', (topic) => {
    // Leave the specified topic
    // console.log(topic,'topic');

    socket.leave(topic);
    clearInterval(intervalId);

    // Remove the socket from the topicConnections map
    if (topicConnections.has(topic)) {
      topicConnections.get(topic).delete(socket.id);
      console.log(socket.id, 'socket.id');
      console.log(topicConnections.get(topic), 'topicConnections.get(topic)');
      if (topicConnections.get(topic).size === 0) {
        topicConnections.delete(topic);
        console.log(topicConnections, 'topicConnections');

      }
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    // Remove socket from all topics when disconnected
    // topicConnections.forEach((sockets, topic) => {
    if (topicConnections.has(socket.id)) {
      topicConnections.delete(socket.id);
      if (topicConnections.size === 0) {
        topicConnections.delete(topic);
      }
    }
    // });
    // console.log('User disconnected');
  });
});

app.set(express.urlencoded({ extended: true }))
app.use(express.json())
// cors
app.use(cors());
app.options("*", cors());

// language file
app.use(i18n);
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app.html');
  // res.send("Testing from the node service.");

})
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(require("./src/routes/common.route"));
