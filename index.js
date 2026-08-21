const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('API Online e Operacional'));
app.listen(3000);