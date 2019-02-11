const mongoose = require('mongoose')

mongoose.promise = global.promise;


// enable mongoose Debug mode

mongoose.set('debug', true);

mongoose.connect("mongodb://localhost:27017/Shoes", { useNewUrlParser: true });
