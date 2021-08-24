import React, { useEffect, useState  } from "react";
import axios from 'axios';

const List = () => {
    const [data, setData] = useState({hits: []});

    useEffect(async () => {
        const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
        );
        // const result = await axios.get("https://hn.algolia.com/api/v1/search?query=redux")
        // .then(function(response) {
        //     console.log(response.data);
        //     // setData(response.data);

        // })
        // .catch(function(error) {
        //   console.log(error);
        // });


        setData(result.data);
    });
    return (
        <div>
            <h1>LIst page</h1>
            {/* {data.hits.map((item) => (
                <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
                </li>
            ))} */}
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {data.hits.map((item) => (
                      <tr key={item.objectID}>
                        <td scope="row">#</td>
                        <td>{item.title}</td>
                        <td>Action</td>
                      </tr>
                ))}



                </tbody>
            </table>
        </div>
    )
}

export default List
