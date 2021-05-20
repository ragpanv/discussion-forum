import React from 'react'
import '../css/DiscussBox.css'
import {Avatar} from '@material-ui/core';
import { useSelector } from "react-redux";
import { selectUser } from '../features/userSlice';

function DiscussBox(){
    const user=useSelector(selectUser)
    return (
        <div className="discussBox">
            <div className="discussBox_info">
                <Avatar src={user.photo}/>
                <h5>{user.displayName}</h5>
            </div>
            <div className="discussBox__disucss">
                <p>What is your question?</p>
            </div>
        </div>
    )
}

export default DiscussBox;
