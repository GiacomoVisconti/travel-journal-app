const connection = require("../data/connection");

//Create the functions for the CRUD operations

//INDEX
function index(req, res) {

    const sql = 'select stops.id, trips.name as `trip_name`, stops.name, stops.description, moods.name as `mood`, stops.positives_vibes, stops.negatives_vibes, stops.phisical_effort, stops.economical_effort, stops.costs from stops join  trips on stops.trip_id = trips.id join moods on stops.id_moods = moods.id'
    connection.query(sql, (err, result) => {
        //Manage 500 error
        if (err) return res.status(500).json({ error: 'true', message: err.message })
        res.json(result)
    })
}

//SHOW
function show(req, res) {
    const { id } = req.params
    const sql = 'select stops.id, trips.name as `trip_name`, stops.name, stops.description, moods.name as `mood`, stops.positives_vibes, stops.negatives_vibes, stops.phisical_effort, stops.economical_effort, stops.costs from stops join  trips on stops.trip_id = trips.id join moods on stops.id_moods = moods.id WHERE stops.id = ?'
    connection.query(sql, [id], (err, result) => {
        //Manage 500 error
        if (err) return res.status(500).json({ error: 'true', message: err.message })
        res.json(result[0])
    })
}

//POST
function post(req, res) {
    const { trip_id, name, description, id_moods, positives_vibes, negatives_vibes, phisical_effort, economical_effort, costs } = req.body

    const sql = 'INSERT INTO `boolean_trip_holiday`.`stops` ( trip_id, name, description, id_moods, positives_vibes, negatives_vibes, phisical_effort, economical_effort, costs) VALUES (?, ? ,? , ? , ? , ? , ? , ? , ? );'

    connection.query(sql, [trip_id, name, description, id_moods, positives_vibes, negatives_vibes, phisical_effort, economical_effort, costs], (err, result) => {
        //Manage 500 error
        if (err) return res.status(500).json({ error: 'true', message: err.message })


        res.status(201).json({
            message: 'Stop added successfully',
            stop: {
                trip_id: trip_id,
                name: name,
                description: description,
                id_moods: id_moods,
                positives_vibes: positives_vibes,
                negatives_vibes: negatives_vibes,
                phisical_effort: phisical_effort,
                economical_effort: economical_effort,
                costs: costs


            }
        })
    })
}



module.exports = {
    index,
    show,
    post
}