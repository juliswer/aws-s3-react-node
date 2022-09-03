import React from "react";

function App() {
  const [post, setPost] = React.useState({
    title: "",
    photo: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <div>
      <form>
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
        <button onClick={handleSubmit}>Upload</button>
      </form>
    </div>
  );
}

export default App;
