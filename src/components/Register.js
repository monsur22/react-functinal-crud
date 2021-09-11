import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Register = () => {
    let history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history.push("/")
        }
    })

    async function addUser() {
        console.warn(name,email,password);

        let item = {name, password, email}

        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('email',email);
        // formData.append('password',password);

        const result = await fetch('http://localhost:8000/api/singup',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        console.warn(result);
        // result=await result.json();
        // localStorage.setItem("user-info",JSON.stringify(result));
        const json = JSON.stringify(item);
        localStorage.setItem("user-info", json);
        history.push("/");


    }
    return (

            <div className="container">
            <h4>Registration Page</h4>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" name="name" class="form-control"  placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">E-mail</label>
                    <input type="text" name="email" class="form-control"  placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="password" name="password" class="form-control"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button  type="submit" class="btn btn-primary"onClick={addUser}>Submit</button>

        </div>

    )
}

export default Register
