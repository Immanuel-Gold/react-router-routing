import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./About.tsx";
import More from "./More.tsx";
import Blogs from "./Blogs.tsx";
import Help from "./Help.tsx";
import Layout from "./Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />}>
            <Route path="blogs/:id" element={<Blogs />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
