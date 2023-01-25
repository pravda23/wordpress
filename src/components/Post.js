import { useState, useEffect } from "react";

const Post = (props) => {
  const { postId } = props.monster;
  return (
    <>
      <h2>{postId}</h2>
    </>
  );
};
export default Post;
