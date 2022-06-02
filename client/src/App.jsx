import { useState } from "react";
import logo from "./logo.svg";
import ilustrasi from "./assets/ilustrasi.svg";
import { Link } from "react-router-dom";
import "./App.css";

const API_URL = "http://localhost:8080/v1";

function App() {
  const [count, setCount] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login_user();
  };

  return (
    <div className="App h-screen flex justify-center items-center">
      <Link to="login">Login</Link> 
    </div>
  );
}

async function login_user() {

  let formData = new FormData
  formData.append("username", "admin@admin.com")
  formData.append("password", "admin123")

  fetch(API_URL + "/auth/token", {
    method: "POST",
    body: formData
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

export default App;
