const Posts = (data) => {
  console.log(data.data);
  {
    data.data.map((i) => {
      return <h1>{i.id}</h1>;
    });
  }
};

export default Posts;
