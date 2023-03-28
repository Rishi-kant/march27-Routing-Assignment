import React from 'react'
 import './App.css'
export default function About(){
  return(
    <div className="container">
      <div className="left-div">
        <h1 className="heading">About us |</h1>
      <img  className="profilePic" src="https://images.pexels.com/photos/14172204/pexels-photo-14172204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" height="300px"/>
      <h3>Age :24</h3>
      <h4>Location : India</h4>
      </div>
       
      <div className="right-div">
      <p>Rishi kant </p>
       <p>I am from kanpur uttar pradesh. I did my graduation in B.Tech from css university Meerut in machenical Engineering.</p> 
       <div className="right-div-child">
         <div className="hob">
            <p>My skills are..</p>
            <p>Java , Html</p>
            <p>css , javaScript</p>
            <p>React</p>
            <p></p>
         </div>
         <div className="hob">
           <p>My hobbies are reading books , lestening musuc and playing vedio games</p>
         </div>
         <div className="hob">
           <p>I knows basics of react, React Hooks and Routing verry well</p>
         </div>
       </div>
      </div>
    </div>
  )
}