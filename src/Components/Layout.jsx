import React from 'react'

export default function Layout(props) {
  return (
    <div>
    <div>
        HEADER
    </div>
    <div>
        {props.children}
    </div>
    </div>
  )
}
