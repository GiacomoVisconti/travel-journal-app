const express = require('express')
const app = express()
const tripRouter = require('./routes/tripRouter')

app.use(express.json())

//Server Listening
app.listen(process.env.PORT, () => {
    console.log((`Server is running at http://localhost:${process.env.PORT}`));

})

app.use('/api/trip', tripRouter)