import React, { useEffect, useState  } from "react";
import axios from 'axios';

const Test = () => {
    const [data, setData] = useState([]);

    useEffect(async () => {
        await axios.get("https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData")
        .then(function(response) {
            console.log(response.data);
            setData(response.data);

        })
        .catch(function(error) {
            console.log(error);
        });
        }, []);
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
                    <th scope="col">List Name</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td scope="row">#</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>Action</td>
                    </tr>
                ))}



                </tbody>
            </table>
        </div>
    )
}

export default Test
