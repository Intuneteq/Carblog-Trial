import UseCustomHook from "./UseCustomHook";
import Bloglist from "./BlogList";

const Blog = () => {
 
  const {data:blogApp, isLoading, error} = UseCustomHook("http://localhost:8000/blogs");

  

  return (
    <div>
      <Bloglist content={blogApp} heading="Car Review Blog" />
      {isLoading ? <div>Loading...</div> : ""}
      {error && <div>There is an error Fetching Data</div>}
    </div>
  );
};

export default Blog;
