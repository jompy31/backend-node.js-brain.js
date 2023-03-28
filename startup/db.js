const mongoose  = require('mongoose');
let winston = require('winston')

module.exports = function (){
mongoose.connect("mongodb://127.0.0.1:27017/iriquiqui", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log('connected to MongoDB'))
.catch(err => winston.info('could not connect to MongoDB...'))
; 

}