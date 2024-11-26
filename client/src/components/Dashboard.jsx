import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import { Plus } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { TokenContext } from '../context/tokenContext'
import { InterviewContext } from '../context/InterviewContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const[name,setName]=useState(null)
    const [description,setDescription]=useState(null)
    const {token,setToken} = useContext(TokenContext)
    const {setQuestions,setId} = useContext(InterviewContext)
    const {getAccessTokenSilently} = useAuth0()
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const temptoken = await getAccessTokenSilently()
        console.log(temptoken)
        
        setToken(temptoken)
        const prompt = `take a mock interview for ${name} generate an array of interview questions that align with the key responsibilities and requirements of the job . Job description , important subjects are as follows : ${description}`
        const response = await axios.post('/generateQues',
            {prompt},
            {
                // body:{prompt:prompt},
                headers:{
                    'authorization': `Bearer ${token}`
                },
            },
        )
        const {questions} = response.data
        // questions.replace('['," ")
        // questions.replace(']'," ")
        const newques = JSON.parse(questions)
        setQuestions(newques)
        setId(response.data.Interid)
        navigate('/live')
        
    }
  return (
    <>
    <button className="btn btn-neutral fixed bottom-5 right-5" onClick={()=>document.getElementById('my_modal_3').showModal()}><Plus />New Interview</button>
    <dialog id="my_modal_3" className="modal ">
        <div className="modal-box w-[1000px]">
            <form method="dialog" >
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Start a new interview!</h3>
            <div className=' w-full'>
            <form className=' flex gap-1 flex-col' onSubmit={(e)=>handleSubmit(e)}>
            <label className="form-control w-4/5 p-1">
                <div className="label w-full">
                    <span className="label-text">Job title</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full input-secondary" onChange={(e)=>setName(e.target.value)} />
            </label>
            <label className="form-control w-4/5 p-1">
                <div className="label">
                    <span className="label-text">Job Description</span>
                </div>
                <textarea type="text" placeholder="Include important information like roles responsibilities. Also tell subjects you have prepared if any " className=" textarea textarea-bordered textarea-secondary w-full h-24 overflow-y-auto" onChange={(e)=>setDescription(e.target.value)}/>
            </label>
            <button type='submit' className=' btn btn-secondary btn-sm w-20 self-end'>Submit</button>
            </form>
            </div>
        </div>
    </dialog>
    </>
  )
}

export default Dashboard