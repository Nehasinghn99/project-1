import React from 'react'
import Form from "../Component/Task1/Form"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const Task1 = () => {
  const [post, setpost] = useState([]);

  function loadpost() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setpost(res.data);
    });
  }

  useEffect(() => {
    loadpost();
  }, []);

  return (
    <div>
      {/* <Form/> */}
      <h1>test</h1>
      {post.map((item) => {
        if (item.userId == 2) {

          return (
            <>
              <p>{item.userId}</p>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </>
          );
          
        }
      })}
    </div>
  )
}

export default Task1
