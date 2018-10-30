const express = require('express');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.get('/api/inventory', controller.getInventory);

const port = 4000;
app.listen(port, () => { console.log(`Did someone say port ${port}?`); });