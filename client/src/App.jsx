import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTINGER_IP}/api/message`)
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
