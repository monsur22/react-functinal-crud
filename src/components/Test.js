import React, { useEffect, useState  } from "react";
import axios from 'axios';

const Test = () => {
    const [data, setData] = useState([]);

    useEffect(async () => {
        await axios.get("http://localhost:5000/posts")
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
                    <th scope="col">Creator</th>
                    <th scope="col">Title</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        <td scope="row">#</td>
                        <td>{item.creator}</td>
                        <td>{item.title}</td>
                        <td>Action</td>
                    </tr>
                ))}



                </tbody>
            </table>
        </div>
    )
}

export default Test
