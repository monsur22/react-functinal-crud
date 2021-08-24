import React, { useEffect, useState  } from "react";
import axios from 'axios';

const List = () => {
    const [data, setData] = useState({hits: []});

    useEffect(async () => {
        const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
        );

        setData(result.data);
    });
    return (
        <div>
            <h1>LIst page</h1>
            {data.hits.map((item) => (
                <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
                </li>
            ))}
            {/* <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default List
