import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const API_URL = "http://localhost:8080/v1";

function App() {
  const [count, setCount] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login_user();
  };

  return (
    <div className="App">
      <form class="form-control" onSubmit={handleLogin}>
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            class="input input-bordered"
          />
        </label>
        <label class="label">
          <span class="label-text">Your Password</span>
        </label>
        <label class="input-group">
          <span>Password</span>
          <input type="password" class="input input-bordered" />
        </label>
        <button class="btn" type="submit">
          Login
        </button>
      </form>
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
