const mongoose = require('mongoose')

const interviewSchema = mongoose.Schema({
    interviewName : {type:String,trim:true},
    userId:{type:String,unique:true},
    questions : [{type:String}],
    answer : [{type:String}],
    feedback:[{type:String}],
},{Timestamp:true})

const Interview = mongoose.model('Interview',interviewSchema)

module.exports = Interview