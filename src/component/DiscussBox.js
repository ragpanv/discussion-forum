import React from 'react'
import '../css/DiscussBox.css'
import {Avatar} from '@material-ui/core';
function DiscussBox(){
    return (
        <div className="discussBox">
            <div className="discussBox_info">
                <Avatar/>
                <h5>Username</h5>
            </div>
            <div className="discussBox__disucss">
                <p>What is your question?</p>
            </div>
        </div>
    )
}

export default DiscussBox;