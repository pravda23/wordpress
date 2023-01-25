import { useState, useEffect } from "react";
import "../styles/App.css";
import Posts from "./Posts";

const App = () => {
  const [postData, setPostData] = useState({
    id: "hey",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://pravdaofficial.com/wp-json/wp/v2/posts?_fields=id,title,link"
    )
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        setPostData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  console.log(postData);

  return (
    <>
      <div className="App">Recent posts</div>
      <Posts data={postData} />
    </>
  );
};

export default App;
