import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
const Edit = (props) => {
    let history = useHistory();
    const [data, setData] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [img, setImg] = useState('');
    const apiUrl = "http://localhost:8000/api/model/edit/" + props.match.params.id;

      console.warn("props",props.match.params.id)
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
        useEffect(async () => {
              let result = await fetch(apiUrl)
              result = await result.json();
              setData(result);
              console.log(result);
              setFirstName(result.firstName)
              setLastName(result.lastName)
              setImg(result.img)
              const json = JSON.stringify(result);
              const lol = localStorage.setItem("result", json);
              // console.log(localStorage.setItem("result", json));
              console.log(lol);

          },[]);
          // const hello = Object.keys(localStorage.setItem("result", lol))

        // axios.post(`https://6125b4842d4e0d0017b6c425.mockapi.io/todo`, postData)
      async function updateProduct(id){
          const formData = new FormData()
          formData.append('firstName', firstName);
          formData.append('lastName', lastName);
          formData.append('img', img);
        const result = await fetch("http://localhost:8000/api/model/update/" + props.match.params.id,{
            method: 'POST',
            body: formData
        });
        console.log(formData)

        // alert("Data hasbeen updated")
        // getData()
        history.push("/");
      }


    return (
        <div className="container">
        <h1>Edit Page</h1>

            <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" name="firstName" class="form-control"  placeholder="First Name" defaultValue={data.firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" name="lastName" class="form-control"  placeholder="Last Name"  defaultValue={data.lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div class="form-group">
                    <label for="exampleFormControlFile1">Image</label>
                    <input type="file"  class="form-control-file" id="exampleFormControlFile1"  onChange={(e) => setImg(e.target.files[0])} />
            <img style={{width:100}} src={"http://localhost:8000/image/"+data.img}></img>

            </div>
            <button  type="submit" class="btn btn-primary" onClick={()=>updateProduct(data.id)}>Submit</button>

    </div>
    )
}

export default Edit
