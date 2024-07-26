const express = require('express')
const cron = require('node-cron');

const app = express();

cron.schedule('* * * * * ', ()=>{
    console.log('CRON job running every minute');
})

app.listen(3000, ()=>{
    console.log('Server is running on port', 3000)
})