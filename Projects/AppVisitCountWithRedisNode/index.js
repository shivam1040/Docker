const express = require('express')
const redis = require('redis')
const process = require('process')

const app = express()
const client = redis.createClient({
    //notice how service name is usded here to connect to redis container, not the url
    host: 'redis-server',
    port: 6379
})
client.set('visits', 0)

app.get('/', (req, res) => {
    process.exit(0) //way to exit a process
    client.get('visits', (err, visits) => {
        res.send('visits are '+visits)
        client.set('visits', parseInt(visits)+1)
    })
})

app.listen(8081, () => {
    console.log('Listening')
})