const {Tide }= require('../models/tide.models');

module.exports.index = (request, response) => {
    response.json({
       message: "Hola Mundo!"
    });
}

module.exports.createTide = (request, response) => {
    const { name } = request.body;
    Tide.create({
        name,
    })
        .then(tide => response.json(tide))
        .catch(err => response.status(400).json(err));
}