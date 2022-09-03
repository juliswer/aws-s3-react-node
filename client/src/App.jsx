import React from "react";
import axios from "axios";

function App() {
  const [post, setPost] = React.useState({
    title: "",
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      sentPost: post,
    });
    try {
      const response = await axios.post("http://localhost:3000/upload", post);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <input
          type="file"
          name="photo"
          onChange={(e) => setPost({ ...post, photo: e.target.files[0] })}
        />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default App;
