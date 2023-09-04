// setting up the connection to our database
//if database doesnt exist, writing name of database will automatically create it

const mongoose = require('mongoose');

//                                          only need to change db name
mongoose.connect('mongodb://127.0.0.1:27017/tvshows', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connection to the database', err));

//will always look the same
//JUST CHANGE NAME OF DATABASE