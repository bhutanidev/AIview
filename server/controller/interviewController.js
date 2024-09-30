const { GoogleGenerativeAI } = require("@google/generative-ai");

// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateQuestions = async(req,res)=>{
    const {prompt} = req.body //"take a mock interview for frontend engineer intern applying as a fresher using techstacks as react and next . Also ask some theoritical questions on dsa . only ask 5 questions.provide only the questions in json format and nothing else"
    
    const result = await model.generateContent(prompt);
    // console.log(result.response.text());
    // return res.json({questions:result.response.text()})
    const temp = result.response.text()
    const ans = "["+temp.split('[')[1]
    // const str = "```let x = 10;\nconsole.log(x);```";
    const str = ans.replace(/```/g, ''); // Or try this as an alternative: str.replace(/\\`\\`\\`/g, '')
    // console.log(str);
    
    const questions = JSON.parse(str)

    return res.json({questions});
    
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

module.exports={
    generateQuestions,
    evaluateQuestions
}