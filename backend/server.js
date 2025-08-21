const express = require('express')
const app = express()
const connection = require('./data/connection')

//Server Listening
app.listen(process.env.PORT, () => {
    console.log((`Server is running at http://localhost:${process.env.PORT}`));

})

