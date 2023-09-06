import { useState } from "react";

const Post = (i) => {
  const [isOpen, setIsOpen] = useState(false);

  let togglePost = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1 onClick={togglePost} key={i.postData.id}>
        {i.postData.title.rendered}
      </h1>
      {isOpen ? <p>{i.postData.content.rendered}</p> : null}
    </div>
  );
};
export default Post;
