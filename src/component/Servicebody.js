import React from 'react'

const Servicebody = ({image, title}) => {
  return (
    <div>
         <div className="card" >
      <img src={image} alt="" />
       <div className="card-body">
         <h5 className="card-title">{title}</h5>
       </div>
     </div>
    </div>
  )
}

export default Servicebody