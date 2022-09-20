import React from 'react'
import './login.css'
import { useState } from 'react'
import { auth } from '../../firebase'
import { Link ,useHistory} from "react-router-dom";

function Login() {
    const [email,setemail] = useState('')
    const [password,setPass] = useState('')
    const history = useHistory();
    const updateEmail = (e) =>{
        setemail(e.target.value)
    }
    const updatePass = (e)=> {
        setPass(e.target.value)
    }
    const login = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(authUser =>{
            console.log("login",authUser);
            history.push("/admin");
        })
        .catch(error=>{
            alert(error)
        })
    }
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={updateEmail} value={email}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label" >Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={updatePass} value={password}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={login}>Submit</button >
                <p >New User?<br />Create account? <a href="register.html">Sign-up</a></p>
            </form>
        </div>
            )
}

export default Login