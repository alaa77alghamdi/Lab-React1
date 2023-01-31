import React from 'react'

interface Services {
   typeService:string,
    price?:number}

function Services(props:Services) {
  return (
    <div className="container">
    <div className="card">


<br></br>
<div className="Language">
{props.typeService}
{props.price}


</div>

</div>
    </div>
  )
}

export default Services