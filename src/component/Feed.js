import React from 'react'
import '../css/Feed.css'
import DiscussBox from './DiscussBox'
import Post from "./Post";
function Feed(){
    return (
      <div className="feed">
        <DiscussBox />
        <Post />
        <Post />
        
      </div>
    );
}
export default Feed;