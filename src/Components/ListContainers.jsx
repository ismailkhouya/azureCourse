import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'

export default function ListContainers({Containers}) {
 

  return (   
        <div>
           
                {
                    Containers.map(con => {
                    return (
                        <span key={con.id}>
                        <Link  to={"/Details/"+con.name}> {con.name}</Link>
                        </span>

                    )
                    })
                }
        </div>

   
  )
}
