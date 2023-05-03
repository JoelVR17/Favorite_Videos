import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoList from "./components/Videos/VideoList";
import VideoForm from "./components/Videos/VideoForm";
import Navbar from "./components/Navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-4">
        <Routes>
          <Route>
            <Route path="/" element={<VideoList />} />
            <Route path="/new-video" element={<VideoForm />} />
            <Route path="/update/:id" element={<VideoForm />} />
          </Route>
        </Routes>
      </div>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
