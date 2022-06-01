const express = require('express');
const app = express()

app.use(express.static('./todomvc'))
app.use(express.static('../react-v3'))
app.listen(8080, () => console.log('server running at http://localhost:8080'))
