import React from 'react'


interface Programer{
    name:string,
    Language:string ,
    Experienc?:number,
    Company?:string 
}


function Programers(props:Programer) {
  return (
    <div className="container">
    <div className="card">
    <br></br>
<div className="name">
{props.name}

<div className="Language">

{props.Language}
{props.Experienc}
{props.Company}
</div>

</div>
    </div>

    </div>
  )
}

export default Programers