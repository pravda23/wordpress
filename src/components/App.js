import { useState, useEffect } from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Posts from "./Posts";

const App = () => {
  const [postsData, setPostsData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://pravdaofficial.com/wp-json/wp/v2/posts?_fields=id,title,link,content"
    )
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        setPostsData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="App">Recent posts</div>
      <Posts postsData={postsData} />
    </>
  );
};

export default App;
