import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Protected = (props) => {
    let history = useHistory();
    let Cmp=props.Cmp

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history.push("/register")
        }
    },[])
    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected
