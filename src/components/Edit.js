import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
const Edit = (props) => {
    let history = useHistory();
    const [data, setData] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const apiUrl = "http://localhost:8000/api/model/edit/" + props.match.params.id;

    /// 1st way for userEffect useing
    // useEffect(() => {
    //     const fetchData = async () => {
    //       const result = await axios.get(apiUrl)
    //       setData(result.data);
    //       console.log(result.data);
    //     };

    //     fetchData();
    //   }, []);

      /// 2nd way for userEffect useing
      console.warn("props",props.match.params.id)

        useEffect(async () => {
              let result = await fetch(apiUrl)
              result = await result.json();
              setData(result);
              console.log(result);
              setFirstName(result.firstName)
              setLastName(result.lastName)



          },[]);


      async function updateProduct(id){
          const formData = new FormData()
          formData.append('firstName', firstName);
          formData.append('lastName', lastName);
        //   formData.append('file', file);
        const result = await fetch("http://localhost:8000/api/model/update/" + props.match.params.id,{
            method: 'POST',
            body: formData
        });
        console.log(result)
        alert("Data hasbeen updated")
      }


    return (
        <div className="container">
        <h1>Edit Page</h1>
        {/* <form > */}
            <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" name="firstName" class="form-control"  placeholder="First Name" defaultValue={data.firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" name="lastName" class="form-control"  placeholder="Last Name"  defaultValue={data.lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <button  type="submit" class="btn btn-primary" onClick={()=>updateProduct(data.id)}>Submit</button>
        {/* </form> */}
    </div>
    )
}

export default Edit
