import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,useHistory
  } from "react-router-dom";
const Header = () => {
    let history = useHistory();

    const user = JSON.stringify( localStorage.getItem("user-info"));
    console.warn(user);

    function logout(){
        localStorage.clear();
        history.push("/")

    }
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a class="navbar-brand" href="#"></a> */}
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                <Link class="nav-link" to="/">Home</Link>

                </li>
               {/* <li class="nav-item active">
                    <Link class="nav-link" to="/add">Add</Link>

                </li> */}
                <li class="nav-item">
                    {/* <a class="nav-link" href="#">Link</a> */}
                    <Link class="nav-link" to="/Test">Test</Link>

                </li>

                    {
                        localStorage.getItem('user-info') ?
                        <>
                        <li class="nav-item">
                        <Link class="nav-link" to="/add">Add</Link>
                        </li>

                        </>

                        :
                        <>
                        <li class="nav-item">

                        <Link class="nav-link" to="/register">Registration</Link>
                        </li>
                        <li class="nav-item">

                        <Link class="nav-link" to="/login">Login</Link>
                        </li>
                        </>
                    }



                 {/* <li class="nav-item">
                     <Link class="nav-link" to="/register">Registration</Link>

                 </li>
                 <li class="nav-item">
                     <Link class="nav-link" to="/login">Login</Link>

                 </li> */}
                    { localStorage.getItem('user-info') ?
                        <>

                        <li class="nav-item" >
                            <Link class="nav-link" onClick={logout} >Logout</Link>

                        </li>
                        </>
                    : null
                }
                </ul>

            </div>
            </nav>
        </div>
    )
}

export default Header
