

import React from 'react'
import style from "./Register.module.css"
export default function Register(){
  return(
    <div   className={style.container}>
         <div><input 
       className={style.inpt} 
       type="email" placeHolder="EMAIL"/></div>
      <div><input className={style.inpt}
      type="text" placeHolder="USER NAME"/> </div>
      <div><input 
       className={style.inpt} 
       type="password" placeHolder="PASSWORD"/></div>
      
      <div> <button className={style.btn}>Register</button></div>
    </div>
  )
}