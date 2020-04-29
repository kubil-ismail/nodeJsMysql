const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('../app/http/routes/web');
routes(app);

app.listen(port);
console.log('Server ready in http://localhost:' + port);