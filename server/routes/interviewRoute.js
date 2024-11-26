const express = require("express")

const interviewRouter = express.Router();

const { jwtCheck , userAttatch} = require('../middleware/authMiddlewares')
const {generateQuestions,evaluateQuestions, getAllInterviewHeading,saveInterview} = require("../controller/interviewController")

// interviewRouter.use(jwtCheck,userAttatch).get('/generateQues',generateQuestions)
interviewRouter.use(jwtCheck,userAttatch).post('/generateQues',generateQuestions)

interviewRouter.use(jwtCheck,userAttatch).post('/evaluate',evaluateQuestions)
interviewRouter.use(jwtCheck).get('/getAllInterview',getAllInterviewHeading)
interviewRouter.use(jwtCheck).post('/saveInterview',saveInterview)



module.exports={
    interviewRouter
}
