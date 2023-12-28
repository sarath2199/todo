"use client"
import Headerpage from '../Headerpage';
import sty from "./signup.module.css";
import React, { useState, useEffect } from 'react'; 
// import Axios from 'axios';

function page(){
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [errors, setErrors] = useState({}); 
    const [isFormValid, setIsFormValid] = useState(false); 
  
    useEffect(() => { 
        validateForm(); 
    },
    [fname,lname,email,password]);
    const validateForm = () => { 

        let errors = {}; 
        if (!fname) { 
            errors.fname = 'First Name is required.'; 
        } 
        if (!lname) { 
            errors.lname = 'Last Name is required.'; 
        } 
        if (!email) { 
            errors.email = 'Email is required.'; 
        }  else if (!/\S+@\S+\.\S+/.test(email)) { 
            errors.email = 'Email is invalid.'; 
        } 
        if (!password) { 
            errors.password = 'Password is required.'; 
        }else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.'; 
         }
         setErrors(errors); 
         setIsFormValid(Object.keys(errors).length === 0);
    }
    const handleSubmit = () => { 
        if (isFormValid) { 
            console.log('Form submitted successfully!'); 
        } else { 
            console.log('Form has errors. Please correct them.'); 
        } 
    };
    return(
        <>
        
        <div className={sty.Body} >
        <Headerpage/>
            <div className={sty.form}>
            <form className={sty.formc}>
                <div className={sty.names}>
            <label>First Name</label><br/>
            <input type="text" className="input" 
             value={fname} 
             onChange={(e) => setfName(e.target.value)}
            /><br/>
             {errors.fname && <p className={sty.error}>{errors.fname}</p>} 
            </div>
            <div className={sty.names}>
            <label>Last Name</label><br/>
            <input type="text" className="input"
            value={lname} 
            onChange={(e) => setlName(e.target.value)}
            /><br/>
             {errors.lname && <p className={sty.error}>{errors.lname}</p>} 
            </div>
            <div className={sty.info}>
            <label>Email Address</label><br/>
            <input type="email" className="input"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
             {errors.email && <p className={sty.error}>{errors.email}</p>}
             </div>
             <div className={sty.sec}>
            <label>Password</label><br/>
            <input type="password" className="input"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
             {errors.password && <p className={sty.error}>{errors.password}</p>}
             <br/><br/>
            </div>
            <button className="btn" type="submit"
             sty={{ ...sty.button, opacity: isFormValid ? 1 : 0.5 }}
             disabled={!isFormValid}
            onClick={handleSubmit} >
                Signup</button><br/><br/>
            <div className={sty.login}>
                <span>Already a user?<a href='/Signin'>Login</a></span>
                </div>
            </form>
            </div>
            </div>
        </>
    )
    }

export default page;