import React, { useEffect, useState } from 'react'
import '../css/Feed.css'
import db from '../firebase';
import DiscussBox from './DiscussBox'
import Post from "./Post";
function Feed(){

  const [posts, setPosts]=useState([])

  useEffect(()=>{
    db.collection("question")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            question: doc.data(),
          }))
        )
      );
  },[])

    return (
      <div className="feed">
        <DiscussBox />
        {
          posts.map(({id, question})=>(
            <Post
            key= {id}
            Id= {id}
            image= {question.imageUrl}
            question= {question.question}
            timestamp= {question.timestamp}
            forumUser= {question.user}
            />
          )) }        
      </div>
    );
}
export default Feed;
