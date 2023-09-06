import { Link } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Post";
const Posts = (postsData) => {
  console.log(postsData);

  {
    return (
      <>
        <div>
          {postsData.postsData.map((i) => {
            return <Post postData={i} />;
          })}
        </div>
      </>
    );
  }
};

export default Posts;
