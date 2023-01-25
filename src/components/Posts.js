import { useState, useEffect } from "react";
import Post from "./Post";

const Posts = (data) => {
  console.log(data.data);
  {
    data.data.map((i) => {
      <h1>{i.id}</h1>;
    });
  }
};

export default Posts;
