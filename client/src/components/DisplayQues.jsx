import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Countdown from './Countdown'
import { Mic } from 'lucide-react'
import SpeechRecognition , { useSpeechRecognition } from 'react-speech-recognition'
import debounce from "lodash.debounce"
import { InterviewContext } from '../context/InterviewContext'
import axios from 'axios'
import { TokenContext } from '../context/tokenContext'

const DisplayQues = (props) => {
  // const q = "What is bfs and dfs algorithm . what are thier usages what is greedy What is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedy"
  const { transcript ,resetTranscript, listening} = useSpeechRecognition()

  const [debounceTranscript , setDebounceTranscript] = useState("");
  const {feedback} = useContext(InterviewContext)
  const {token,setToken} = useContext(TokenContext)


  const [activateNext , setActivateNext] = useState(false);


  const {q , handleNext} = props

  let answer = useRef("")

  const prevTranscript = useRef("")

  const updateDebounce = useCallback(
    
    debounce((text)=>{
      console.log("inside deb")
      setDebounceTranscript(text)
    },1000)
  ,[])


  const stop = async()=>{
    SpeechRecognition.stopListening()
    answer=transcript
    resetTranscript()
    const response = await axios.post("/evaluate",{question:q,answer},{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
    })
    console.log(response.data.feedback);
    
    feedback.push(response.data.feedback)
    setActivateNext(true)

  }

  useEffect(()=>{
    const listening_timer = setTimeout(()=>SpeechRecognition.startListening({continuous:true , language:"en-UK"}),10000)
    return ()=>clearTimeout(listening_timer)
  },[])
  useEffect(()=>{

    console.log("inside useeffect");
    

    if (prevTranscript.current !== transcript) {
      updateDebounce(transcript);
      prevTranscript.current = transcript;
    }

    return ()=>{
      updateDebounce.cancel();
    }

  },[updateDebounce])


  return (
    <>

{console.log("inside display")}

    
    <div className=' flex flex-col gap-5 items-center '>

    {/* <div className=' bg-base-300 h-full w-full'> */}
    <div className="card bg-base-200 my-1 w-4/5 shadow-xl flex justify-center items-center flex-row h-fit">
    <div className="card-body w-11/12">
      <h4 className="card-title text-sm ">{q}</h4>
    </div>
    <div className=' w-1/12'>
      <Countdown/>
    </div>
    </div>
    <div className="card bg-base-100 w-4/5 shadow-xl">
  <div className="card-body bg-base-300">
    <h2 className="card-title">Answer</h2>
    {listening&&<p>listening</p>}
    <p className=' text-sm overflow-x-auto max-h-52'>{transcript}</p>
  </div>

</div>
  <button className={`btn ${listening?"btn-error":"btn-disabled bg-error cursor-not-allowed"}`} onClick={stop}>Stop <Mic /></button>
{/* </div> */}
</div>
<button className={activateNext?"btn btn-primary fixed right-6 bottom-6":"btn btn-disabled fixed right-6 bottom-6"} onClick={handleNext}>Next</button>

    </>
  )
}

export default React.memo(DisplayQues)