import { Plus } from 'lucide-react'
import React, { useState } from 'react'

const Dashboard = () => {
    const[name,setName]=useState(null)
    const [description,setDescription]=useState(null)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(name)
        console.log(description)
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