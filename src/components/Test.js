import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//   import Pagination from './Pagination';
import "./pagination.css";

const List = () => {
    const [data, setData] = useState([]);
    let history = useHistory();
    /// pagination start
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(2);// how much item you want in one page

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
      };

      const pages = [];
      for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
      }

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
      const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage == number ? "active" : null}
            >
              {number}
            </li>
          );
        } else {
          return null;
        }
      });
      const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
      };

      const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
      };

      let pageIncrementBtn = null;
      if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
      }

      let pageDecrementBtn = null;
      if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
      }
    //Load more Button
      const handleLoadMore = () => {
        setitemsPerPage(itemsPerPage + 5);
      };
      /// pagination end
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
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {currentItems.map((item) => (
                    <tr key={item._id}>
                        <td scope="row">{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>
                            <img style={{width:100}} src={"http://localhost:8000/"+item.img}>
                                </img></td>

                        <td>
                            {/* <Link className="edit-link" to={  "/edit/"+item.id } >Edit</Link> */}
                            <Link className="edit-link" onClick={() => edit(item.id)}>Edit</Link>
                            <button size="sm" variant="danger" onClick={() => onDeleteHandler(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}



                </tbody>
            </table>
            {/* <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
            /> */}
            {/* pagination start form here */}
            <ul className="pageNumbers">
                <li>
                    <button
                        onClick={handlePrevbtn}
                        disabled={currentPage == pages[0] ? true : false}
                    >
                        Prev
                    </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}

                <li>
                <button
                    onClick={handleNextbtn}
                    disabled={currentPage == pages[pages.length - 1] ? true : false}
                >
                    Next
                </button>
                </li>
            </ul>
            {/* for load more button */}
            {/* <button onClick={handleLoadMore} className="loadmore">
                Load More
            </button> */}
            {/* pagination end  here */}

        </div>
    )
}

export default List
