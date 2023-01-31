import React from 'react'



interface Companies {
    Companyname:string,
    NumEmploy:number ,
    Year?:number,
    
}
function Companies (props: Companies ) {
  return (
    <div className="container">
    <div className="card">


<br></br>
<div className="Language">
{props.Companyname}
{props.NumEmploy}
{props.Year}

</div>

</div>
    </div>

 
  )
}

export default Companies