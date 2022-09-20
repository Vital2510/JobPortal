import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebase'

function Register() {
    const [email, setemail] = useState('')
    const [password, setPass] = useState('')
    
    const updateEmail = (e) => {
        setemail(e.target.value)
    }
    const updatePass = (e) => {
        setPass(e.target.value)
    }
    

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(authObj =>{
            console.log("created",authObj);
        })
        .catch(err=>{
            console.log("failed",err);
        })
    }

    return (
        <div>
            <form>
                
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={updateEmail} value={email} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={updatePass} value={password} />
                </div>

                <button type="submit" class="btn btn-primary" onClick={register}>Submit</button>
                <p>Already have account! <a href="login.html">login</a></p>
            </form>
        </div>
    )
}

export default Register