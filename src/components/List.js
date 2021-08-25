import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

const List = () => {
    const [data, setData] = useState([]);
    let history = useHistory();

    useEffect(async () => {
        await axios.get("https://6125b4842d4e0d0017b6c425.mockapi.io/todo")
        .then(function(response) {
            console.log(response.data);
            setData(response.data);

        })
        .catch(function(error) {
            console.log(error);
        });
        }, []);

        const getData = async () => {
            axios.get(`https://6125b4842d4e0d0017b6c425.mockapi.io/todo`)
                .then((getData) => {
                    setData(getData.data);
                })
        }

        const onDeleteHandler = async(id) => {
            await axios.delete(`https://6125b4842d4e0d0017b6c425.mockapi.io/todo/${id}`)
            .then((response) => {
                console.log(response);
                // history.push('/')
                getData();

        })
    }
    return (
        <div>
            <h1>LIst page</h1>
            {/* {data.map((item) => (
            <li key={item._id}>{item.title}</li>
            ))} */}
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
                        <td><button size="sm" variant="danger" onClick={() => onDeleteHandler(item.id)}>Delete</button></td>
                    </tr>
                ))}



                </tbody>
            </table>
        </div>
    )
}

export default List
