import React from 'react'
import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies'
import Services from './component/Services'
function App() {
 

  return (
   
   <div>
   <Programers name= {"  sara  "}  Language= {"  java  "} Experienc= { 3 } Company= {"  A"}></Programers>

   <Programers name= {"  mohamed   "}  Language= {"  javascript  "} Experienc= { 5 } Company= {"  B"}></Programers>

   <Programers name= {"  noor  "}  Language= {"  c++  "} Experienc= { 2 } Company= {"  C"}></Programers>
   

<Companies  Companyname= {"  A  "}  NumEmploy= { 100 } Year= { 2 } ></Companies>
   
<Companies  Companyname= {"  B  "}  NumEmploy= {  20 } Year= { 4 } ></Companies>
<Companies  Companyname= {"  C  "}  NumEmploy= { 69 } Year= { 1 } ></Companies>




<Services  Companyname= {"  A  "}  NumEmploy= { 100 } Year= { 2 } ></Services>
   
<Services  Companyname= {"  B  "}  NumEmploy= {  20 } Year= { 4 } ></Services>
<Services  Companyname= {"  C  "}  NumEmploy= { 69 } Year= { 1 } ></Services>
   </div>

 
  )
}

export default App
