import React, { useEffect, useState ,useCallback} from 'react'
import { Link, useParams } from 'react-router-dom'
import WithLoading from './WithLoading'


export default function ContainerDetail(props) {
  const params=useParams()
  const [listFiles,setListFiles]=useState(null)
  const [loading,setLoading]=useState(false)

  const getListBlobs = useCallback(async () => {
    var Files=await fetch("https://ismailkhouyaazureapi.azurewebsites.net/api/GetAllBlobs?containerName="+params.containerName);
    var LFiles=await Files.json();
    console.log("FILES"+LFiles)
    setListFiles(LFiles);  
  }, [])

  useEffect(()=>{
    setLoading(true);
    getListBlobs().then(
        res=>{
        setLoading(false)
        }).catch(err=>{
            setLoading(false)
            console.log("ERROR")
        }
  )
  },[getListBlobs])

  

  const ContainerDetailWithLoading=WithLoading(Detail);
  return (
    <div>
    <p>{loading.toString()}</p>
    <ContainerDetailWithLoading loading={loading} listFiles={listFiles}/>

    </div>
  )
}

const Detail=({listFiles})=>{
    console.log(JSON.stringify(listFiles))
    return(
        <div>
                {
                    listFiles?.map(fi => {
                    return (
                          <a key={fi.url} href={fi.url} target="_blank">{fi.name}
                          -- Expire on {fi.expireOn}
                         -- Size : {fi.size}
                         -- Type : {fi.contentType}</a>
                       
                    )
                    })
                }
        </div>

    )
}

