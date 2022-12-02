import React, { useState } from 'react'
import ListContainers from './ListContainers';
import WithLoading from './WithLoading';

const ListContainersWithLoading=WithLoading(ListContainers)
export default function Containers() {
    const [Containers,setContainers]=useState([]);
    const [loading,setLoading]=useState(false);

    const getListContainers=async()=>{
        setLoading(true);
        var containers=await fetch("/GetAllContainers");
        var Lcontainers=await containers.json();
        setContainers(Lcontainers);
        console.log(Lcontainers);
        setLoading(false)
    }

  return (
    <div className='container'>
    <div>
    <button onClick={getListContainers}>
        Get List Containers
    </button>
    </div>
   
    <div>
    <ListContainersWithLoading loading={loading} Containers={Containers}/>

    </div>
    </div>
   
  )
}
