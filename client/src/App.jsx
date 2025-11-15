import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data?.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Welcome to chiacode frontend</h1>
      <h2 className="">{message}</h2>
    </>
  );
}

export default App;
