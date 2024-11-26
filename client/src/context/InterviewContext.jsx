import { createContext ,useContext , useState , useEffect } from 'react';
import React from 'react';

export const InterviewContext = createContext();


export const InterviewProvider = ({ children }) => {
  const [interviewId , setId] = useState(null);
  const [interviewName, setInterviewName] = useState(null);
  const [questions, setQuestions] = useState([" are thier usages what is greedy What is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedyWhat is bfs and dfs algorithm . what are thier usages what is greedy","2. somehting something"]);
  const [answer, setAnswer] = useState([]);
  const[feedback,setFeedbaack] = useState([])

  return (
    <InterviewContext.Provider value={{ interviewId,interviewName, questions , answer, feedback , setInterviewName, setQuestions ,setAnswer,setFeedbaack,setId }}>
      {children}
    </InterviewContext.Provider>
  );
}

// export const ChatState = ()=>{return useContext(ChatContext)}



