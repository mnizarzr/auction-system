import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AuctionSystem from "./AuctionSystem";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import "./index.css";
import Barang from "./Barang";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="auctionsystem" element={<AuctionSystem />}></Route>
      <Route path="barang" element={<Barang />}></Route>
    </Routes>
  </BrowserRouter>
);
