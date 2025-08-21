const connection = require("../data/connection");

//Create the functions for the CRUD operations

//INDEX
function index(req, res) {
    const sql = 'SELECT * FROM boolean_trip_holiday.trips;'
    connection.query(sql, (err, result) => {
        //Manage 500 error
        if (err) return res.status(500).json({ error: 'true', message: err.message })
        res.json(result)
    })
}

//SHOW
function show(req, res) {
    const { id } = req.params
    const sql = ' SELECT * FROM boolean_trip_holiday.trips WHERE id = ?'
    connection.query(sql, [id], (err, result) => {
        //Manage 500 and 400 errors
        if (err) {
            return res.status(500).json({
                error: 'Database query failed'
            })
        }
        if (!result.length > 0) {
            return res.status(404).json({
                error: 'true',
                message: 'Record not found'
            })
        }

        res.json(result[0])
    })
}

//POST
function post(req, res) {
    const { name, date_start, date_end } = req.body
    const sql = 'INSERT INTO `boolean_trip_holiday`.`trips` (name, date_start, date_end) VALUES (?, ? ,?);'

    connection.query(sql, [name, date_start, date_end], (err, result) => {
        //Manage 500 error
        if (err) return res.status(500).json({ error: 'true', message: err.message })


        res.status(201).json({
            message: 'Trip added successfully',
            trip: {

                name: name,
                date_start: date_start,
                date_end: date_end
            }
        })



    })
}


module.exports = {
    index,
    show,
    post
}