import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Validation = () => {
    let history = useHistory();
    // const [data, setData] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [img, setImg] = useState('');
    console.log(img)

    const [firstNameErr, setFirstNameErr] = useState('{}');
    const [lastNameErr, setLastNameErr] = useState('{}');

    // const getData = async () => {
    //     axios.get(`http://127.0.0.1:8000/api/model`)
    //         .then((getData) => {
    //             setData(getData.data);
    //         })
    // }

    /// **********************validatin start from here************************
    const onSubmit =(e)=>{
        e.preventDefault();
        const isValid = formValidation();
    }

    const formValidation =()=>{
        const firstNameErr = {};
        const lastNameErr = {};
        let isValid = true;

        if(firstName.trim().length < 5){
            firstNameErr.firstNameShort = "first name is tooo short";
            isValid = false;

        }
        if(firstName.trim().length > 10){
            firstNameErr.firstNameShort = "first name is tooo long";
            isValid = false;

        }
        if(!lastName.includes("123")){
            lastNameErr.lastName123 = "last name must have 123";
            isValid = false;

        }

        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        return isValid;

    }

    async function addProduct () {
        const isValid = formValidation();
        if(isValid){
            console.warn(firstName,lastName,img)
            const formData = new FormData()
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('img', img);

            const result = await fetch('http://localhost:8000/api/model/',{
              method: 'POST',
              body: formData
          });
          console.log(result)
          // alert("Data hasbeen added")
          history.push("/");
        }

    }
    return (
        <div className="container">
            <h1>Add Page</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" name="firstName" class="form-control"  placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                {Object.keys(firstNameErr).map((key)=>{
                    return <div style={{color: 'red'}}>{firstNameErr[key]}</div>
                })}
                <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" name="lastName" class="form-control"  placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                {Object.keys(lastNameErr).map((key)=>{
                    return <div style={{color: 'red'}}>{lastNameErr[key]}</div>
                })}
                <div class="form-group">
                    <label for="exampleFormControlFile1">Image</label>
                    <input type="file"  class="form-control-file" id="exampleFormControlFile1" onChange={(e) => setImg(e.target.files[0])} />
                </div>
                <button  type="submit" class="btn btn-primary"onClick={addProduct}>Submit</button>

        </div>
    )
}

export default Validation
