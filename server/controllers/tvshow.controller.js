//the functions connected to our routes

const Show = require('../models/tvshow.model');

module.exports.findAllShows = (req, res) => {
    Show.find() //READ
        .then((allShows) => {
            res.json({ shows: allShows })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.createShow = (req, res) => {
    Show.create(req.body)
        .then((newShow) => {
            res.json({show:newShow})
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}
module.exports.findOneShow = (req, res) => {
    console.log(req.params);
    Show.findOne({_id: req.params.id})
        .then((oneShow) => {
            res.json({show:oneShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        })
}
module.exports.updateShow = (req, res) => {
    Show.findOneAndUpdate(
        { _id: req.params.id }, req.body, {new: true, runValidators: true}) //new:true is so the return value is updated
        .then((updatedShow) => {
            res.json({show:updatedShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        })
}
module.exports.deleteShow = (req, res) => {
    Show.deleteOne({ _id: req.params.id})
        .then((result) => {
            res.json({result:result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        })
}

//all queries are same
//JUST CHANGE MODELS USED