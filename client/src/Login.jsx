import { useState } from "react";
import logo from "./logo.svg";
import ilustrasi from "./assets/ilustrasi.svg";
import "./App.css";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:8080/v1";

function Login() {
  const [count, setCount] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login_user();
  };

  return (
    <div className="App h-screen flex justify-center items-center">
      <div>
      <h1 class="font-bold text-2xl">LOGIN</h1>
        <form class="form-control flex items-center" onSubmit={handleLogin}>
          <label class="input-group mt-4">
            <span class="w-28">Email</span>
            <input
              type="email"
              placeholder="info@site.com"
              class="input input-bordered"
            />
          </label>
          <label class="input-group mt-4">
            <span class="w-28">Password</span>
            <input type="password" placeholder="Minimal 8 Karakter" class="input input-bordered" />
          </label>
        </form>

        <form class="flex items-left">
          <p class="mt-1">
            Belum punya akun?
            <a class="mx-1 link link-primary">
              <Link to="/register">Daftar</Link>
            </a>
          </p>
        </form>

        <form>
          <button class="btn btn-primary px-20 text-white mt-2" type="submit">
            Sign In
          </button>
        </form>
      </div>

      <div class="flex justify-center">
        <img src={ilustrasi} alt="ilustrasi" class="w-3/5" />
      </div>
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

export default Login;
