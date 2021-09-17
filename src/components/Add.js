import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import {
    useHistory
} from 'react-router';

const Add = () => {
    let history = useHistory();
    // const [data, setData] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [img, setImg] = useState('');
    console.log(img)

    // const getData = async () => {
    //     axios.get(`http://localhost:8000/api/model`)
    //         .then((getData) => {
    //             setData(getData.data);
    //         })
    // }
    async function addProduct() {
        console.warn(firstName, lastName, img)

        const formData = new FormData()
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('img', img);

        const result = await fetch('http://localhost:8000/api/model', {
            method: 'POST',
            body: formData
        });
        // const result=axios.post('http://localhost:8000/api/model', formData)

        console.log(result)
        // alert("Data hasbeen added")
        history.push("/");


    }
    return ( <
        div className = "container" >
        <
        h4 > Add Page < /h4> <
        div class = "form-group" >
        <
        label
        for = "exampleInputEmail1" > First Name < /label> <
        input type = "text"
        name = "firstName"
        class = "form-control"
        placeholder = "First Name"
        value = {
            firstName
        }
        onChange = {
            (e) => setFirstName(e.target.value)
        }
        /> <
        /div> <
        div class = "form-group" >
        <
        label
        for = "exampleInputEmail1" > Last Name < /label> <
        input type = "text"
        name = "lastName"
        class = "form-control"
        placeholder = "Last Name"
        value = {
            lastName
        }
        onChange = {
            (e) => setLastName(e.target.value)
        }
        /> <
        /div> <
        div class = "form-group" >
        <
        label
        for = "exampleFormControlFile1" > Image < /label> <
        input type = "file"
        class = "form-control-file"
        id = "exampleFormControlFile1"
        onChange = {
            (e) => setImg(e.target.files[0])
        }
        /> <
        /div> <
        button type = "submit"
        class = "btn btn-primary"
        onClick = {
            addProduct
        } > Submit < /button>

        <
        /div>
    )
}

export default Add