import { useParams } from "react-router-dom";

import UseCustomHook from "./UseCustomHook";

function BlogPage() {
  const { id } = useParams();
  const {
    data: vehicle,
    isLoading,
    error,
  } = UseCustomHook(`http://localhost:8000/blogs/${id}`);
  return (
    <div>
      {isLoading ? <div>Loading...</div> : ""}
      {error && <div>There is an error Fetching Data</div>}
      {vehicle && (
        <div>
          <h2 className="head">{vehicle.title}</h2>
          <p>{vehicle.body}</p>
          <h6>Founder: {vehicle.founder}</h6>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
