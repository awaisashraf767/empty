import React from 'react'
import { useNavigate } from 'react-router-dom';

const Common=(props)=>{
  const navigate=useNavigate()
    return(
        <React.Fragment>
          <div className='col-md-5 offset-md-1 order-md-2 '> 
          <img src={props.img} className="img-fluid animated " alt="Home Page"/>
          </div>
          <div className='col-md-6 '>
              <div>
                <h1>{props.name}<span className='text-primary'>iCoder</span></h1>
                <p className='h5 my-3'>We are a team of talented developer making websites.</p>
                <button onClick={()=>{navigate(props.path)}} className='btn btn-outline-primary mt-2'>{props.go}</button>
              </div>
          </div>
        </React.Fragment>
    )
}
export default Common;