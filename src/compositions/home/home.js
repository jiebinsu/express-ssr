import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState('world');

  return (
    <div>
      <h1>Hello, {name}.</h1>

      <input
        type="text"
        id="txtName"
        name="txtName"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default Home;