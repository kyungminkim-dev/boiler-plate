import React, { useEffect } from 'react'
import axios from 'axios';
import { PromiseProvider } from 'mongoose';
//import { response } from 'express'; typeerror 발생
import { withRouter } from 'react-router-dom';

function LandingPage(props) {
    
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response)) //response.data??
    }, [])
    
    const onClickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {
            if (response.data.success) {
                props.history.push("/login")
            } else {
                alert("로그아웃 하는데 실패")
            }
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage)
