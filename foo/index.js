var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((request, response, next) => {
    console.log(`${request.method} ${request.path}`);
    next();
});

app.get('/greeting', (request, response) => {
    response.json({ data: 'Hello, World!' });
});

app.listen(3000);