const express = require('express');
const app = express();
const route = require('./index');

app.use(route);

app.listen(3000, () => {
    console.log('server is running on port 3000')
});