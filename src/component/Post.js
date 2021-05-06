import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/Post.css';
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOneOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutline";
import {MoreHorizOutlined, ShareOutlined} from "@material-ui/icons";

function Post(){
    return (
      <div className="post">
        <div className="post_info">
          <Avatar />
          <h5>Username</h5>
          <small>Timestamp</small>
        </div>
        <div className="post_body">
          <div className="post_question">
            <p>Question</p>
            <button className="post_btnAnswer">Answer</button>
          </div>
          <div className="post_answer">
            <p></p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-RHHW8QX6MgO_Is-84MHLognGQOoXPnCvw&usqp=CAU"
            alt="" width="300px" height="300px"
          />
        </div>

        <div className="post_footer">
          <div className="post_footerAction">
            <ArrowUpwardOutlinedIcon />
            <ArrowDownwardOutlinedIcon />
          </div>
          <RepeatOutlinedIcon />
          <ChatBubbleOutlinedIcon />
          <div className="post_footerLeft">
            <ShareOutlined />
            <MoreHorizOutlined />
          </div>
        </div>
      </div>
    );
}

export default Post;