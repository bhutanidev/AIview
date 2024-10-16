const { GoogleGenerativeAI } = require("@google/generative-ai");
const Interview = require("../model/interviewsModel")
const mongoose = require('mongoose')

// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const generateQuestions = async(req,res)=>{
    const schema = {
        "type": "array",
        "minItems": 6,
        "maxItems":6,  // Specify the minimum number of questions here
        "items": {
            "type": "object",
            "properties": {
                "question": {
                    "type": "string",
                    "description": "The text of the interview question"
                }
            },
            "required": ["question"]
        }
    }
    const {prompt} = req.body //"take a mock interview for frontend engineer intern applying as a fresher using techstacks as react and next . Also ask some theoritical questions on dsa . only ask 5 questions.provide only the questions in json format and nothing else"
    
    const model =genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      });
    // const result = await model.generateContent(prompt);
    // // console.log(result.response.text());
    // // return res.json({questions:result.response.text()})
    // const temp = result.response.text()
    // const ans = "["+temp.split('[')[1]
    // // const str = "```let x = 10;\nconsole.log(x);```";
    // const str = ans.replace(/```/g, ''); // Or try this as an alternative: str.replace(/\\`\\`\\`/g, '')
    // // console.log(str);
    
    // const questions = JSON.parse(str)
    const result = await model.generateContent(prompt);

    return res.send(result.response.text());
    
}

const evaluateQuestions = async(req,res)=>{
    const {question , answer} = req.body;

    const template = `Review the answer ${answer} in context with question ${question} and provide feedback as an interviewer`

    const result = await model.generateContent(template);
    // console.log(result.response.text());
    // return res.json({questions:result.response.text()})
    const temp = result.response.text()

    res.json({'feedback':temp})

}

const getAllInterviewHeading = async(req,res)=>{
    const{userId}=req.body

    const response = await Interview.find({ userId: userId }, 'interviewName _id bookmark').exec();

    res.json(response)

}

const saveInterview = async(req,res)=>{
    const{interviewName,userId,bookmark,questions,answer,feedback}=req.body

    const newobj = await Interview.create({
        interviewName,
        userId,
        questions,
        answer,
        feedback
    })

    console.log(newobj)

    res.send(newobj)
    

}

module.exports={
    generateQuestions,
    evaluateQuestions,
    getAllInterviewHeading,
    saveInterview
}