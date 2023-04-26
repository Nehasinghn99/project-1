import Task1 from "./pages/Task1";
import Test from "./pages/Test"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // const [post, setPost] = useState([]);

  // function loadPost() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     setPost(res.data);
  //   });
  // }

  // useEffect(() => {
  //   loadPost();
  // });

  return (
    <div className="App">
      {/* <Task1/> */}
      <Test/>
      {/* {post.map((data) => (
         <tr>
         <td>{data.title}</td>
         <td>{data.body}</td>
       </tr>
      ))} */}
    </div>
  );
}

export default App;
