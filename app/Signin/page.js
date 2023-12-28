import Headerpage from '../Headerpage';
import sty from "./signin.module.css"
// import React, { useState, useEffect } from 'react';

function page(){

    return(
        <>
        <div className={sty.Body}>
        <Headerpage/>
          <div className={sty.form}>

      <form className={sty.formc}>
        <div className={sty.info}>
      <label>Email Address</label><br/>
            <input type="email" ></input><br/><br/>
            </div>
            <div className={sty.info}>
            <label>Password</label><br/>
            <input type="password" ></input><br/><br/>
            </div>
            <div className={sty.checkbox}>
            <input type="checkbox"/>
            <label>Remember Me</label>
            </div>
            <div className={sty.button}>
            <button>Signin</button><br/><br/>
            </div>
            <div className={sty.login}>
                <a href='/Signup'>New Here? Register</a></div>
            </form>
            </div>
            </div>
            






        </>
    )
}
export default page;