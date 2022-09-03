import React from "react";

function App() {
  return (
    <div>
      <form>
        <input type="text" placeholder="title" name="title" />
        <input type="file" name="photo" onChange={e => console.log(e)} />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default App;
