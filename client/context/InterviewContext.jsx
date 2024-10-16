import { createContext ,useContext , useState , useEffect } from 'react';
import React from 'react';

export const InterviewContext = createContext();


export const InterviewProvider = ({ children }) => {
  const [interviewName, setInterviewName] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);
  const[feedback,setFeedbaack] = useState([])

  return (
    <InterviewContext.Provider value={{ interviewName, questions , answer, feedback , setInterviewName, setQuestions ,setAnswer,setFeedbaack }}>
      {children}
    </InterviewContext.Provider>
  );
}

// export const ChatState = ()=>{return useContext(ChatContext)}



