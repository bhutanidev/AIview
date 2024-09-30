const express = require("express")

const interviewRouter = express.Router();

const { jwtCheck , userAttatch} = require('../middleware/authMiddlewares')
const {generateQuestions,evaluateQuestions} = require("../controller/interviewController")

interviewRouter.use(jwtCheck,userAttatch).get('/generateQues',generateQuestions(req,res))
interviewRouter.use(jwtCheck,userAttatch).get('/evaluate',evaluateQuestions(req,res))

module.exports={
    interviewRouter
}
