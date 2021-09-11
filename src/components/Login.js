import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history.push("/")
        }
    })
    async function login(){
        console.warn(email,password)
        let item = {email,password}
        const result = await fetch('http://localhost:8000/api/login',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        console.warn(result);
        // result=await result.json();

        const json = JSON.stringify(item);
        localStorage.setItem("user-info", json);
        history.push("/add");

    }
    return (

        <div className="container">
            <h4>Login Page</h4>
                <div class="form-group">
                    <label for="exampleInputEmail1">E-mail</label>
                    <input type="text" name="email" class="form-control"  placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="text" name="password" class="form-control"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button  type="submit" class="btn btn-primary"onClick={login}>Submit</button>

        </div>

    )
}

export default Login
