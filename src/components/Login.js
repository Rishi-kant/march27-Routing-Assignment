import React from 'react'

import style from "./Login.module.css"
export default function Login(){
  return(
    <div   className={style.container}>
      <div><input className={style.inpt}
      type="text" placeHolder="USER NAME"/> </div>
      <div><input 
       className={style.inpt} 
       type="password" placeHolder="PASSWORD"/></div>
      <div> <button className={style.btn}>Login</button></div>
    </div>
  )
}