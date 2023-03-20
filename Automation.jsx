import React from 'react'
import {useParams} from 'react-router-dom';
function Automation() {
    const {id} = useParams();
    // console.log(x); 
    return (
        <>
    <div>{id}</div>
    <div>Automation</div>
        </>
  )
}

export default Automation