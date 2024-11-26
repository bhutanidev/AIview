import React, { useContext, useState , useRef, useEffect} from 'react';
// import { useSpeechRecognition } from 'react-speech-recognition';
import { TokenContext } from '../context/tokenContext';
import { useAuth0 } from '@auth0/auth0-react';
import { InterviewContext } from '../context/InterviewContext';
import DisplayQues from '../components/DisplayQues';



const Instruction = () => {
  // const {
  //   browserSupportsSpeechRecognition
  // } = useSpeechRecognition();

  const {token,setToken} = useContext(TokenContext)
  const [quesnum , setQuesNum] = useState(0)
  const {questions} = useContext(InterviewContext)
  const {getAccessTokenSilently} = useAuth0()
  const len = useRef(questions.length)

  const getToken = async()=>{
    const temptoken = await getAccessTokenSilently()
    setToken(temptoken)
  }
    


  console.log(token);
  

  // const handleClick = async()=>{
  //   console.log("callled handle click")
  // }

  const handleClick = ()=>{
    setQuesNum(quesnum+1);
  }

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }

  useEffect(()=>{
    getToken()
    console.log(token);
    
  },[])



  
  
  return (
    <div>

      {console.log("inside instruction")}
      

      {/*<div>INSTRUCTIONS</div> */}
      
      <DisplayQues q={questions[quesnum]} handleNext = {()=>handleClick()} />
    </div>
  );
};
export default Instruction;