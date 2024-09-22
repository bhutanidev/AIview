const mongoose = require('mongoose')

const interviewSchema = mongoose.Schema({
    interviewName : {type:String,trim:true},
    userId:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    questions : [{type:String}],
    answer : [{type:String}],
    feedback:[{type:String}],
    sampleanswer:[{type:String}]
},{Timestamp:true})

const Interview = mongoose.model('Interview',interviewSchema)

module.exports = Interview