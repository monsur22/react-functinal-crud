import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const List = () => {
    const [data, setData] = useState([]);
    let history = useHistory();

    useEffect(async () => {
        await axios.get("http://127.0.0.1:8000/api/model")
        .then(function(response) {
            console.log(response.data);
            setData(response.data);

        })
        .catch(function(error) {
            console.log(error);
        });
        }, []);

        const getData = async () => {
            axios.get(`http://127.0.0.1:8000/api/model`)
                .then((getData) => {
                    setData(getData.data);
                })
        }

        const onDeleteHandler = async(id) => {
            await axios.delete(`http://127.0.0.1:8000/api/model/delete/${id}`)
            .then((response) => {
                console.log(response);
                getData();

        })
    }
    const edit = (id) =>{
        console.log(id);
        history.push("/edit/"+id);
    }


    return (
        <div>
            <h1>LIst page</h1>
             <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        <td scope="row">{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>
                            {/* <Link className="edit-link" to={  "/edit/"+item.id } >Edit</Link> */}
                            <Link className="edit-link" onClick={() => edit(item.id)}>Edit</Link>
                            <button size="sm" variant="danger" onClick={() => onDeleteHandler(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}



                </tbody>
            </table>
        </div>
    )
}

export default List
