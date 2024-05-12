import { useState } from 'react'
import './App.css'


let result=["back","front"]
let links=["./public/img/back.png","./public/img/front.png"]

function App() {
const[random,setRandom]=useState(0)
function test(){
  let rand=Math.floor(Math.random() * 2)
  setRandom(rand)
}
  return (
    <>

    <div className="container">
        <h1>Lets Flip the coin</h1> 
       <img src={links[random]} alt="" />
    </div>
    <div className="container">
      <button onClick={test}>{result[random]}</button>
    </div>
      
    </>
  )
}

export default App
