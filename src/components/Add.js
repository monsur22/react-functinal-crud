import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Add = () => {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [checkbox, setCheckbox] = useState(false);
    // console.log(checkbox)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            firstName,
            lastName,
        };
        axios.post(`https://6125b4842d4e0d0017b6c425.mockapi.io/todo`, postData)
            .then((response) => {
                console.log(response);
                history.push('/')
            });
    }
    return (
        <div className="container">
            <h1>Add Page</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" name="firstName" class="form-control"  placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" name="lastName" class="form-control"  placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                {/* <div class="form-check">
                    <input type="checkbox" class="form-check-input" onChange={(e) => setCheckbox(!checkbox)}/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button  type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Add
