import React from 'react'

export default function CreateVM() {
    const callApi=async ()=>{
        console.log("api call...")
        let res=await fetch("/GetAllContainers");
        console.log(await res.text())
    }
  return (
    <button onClick={callApi}>
        Test Api
    </button>
  )
}
