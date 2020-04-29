const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

const port = 3000;

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
    console.log(`listening at port !!! ${port}`);
});