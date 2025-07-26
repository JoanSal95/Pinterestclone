import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import CreatePin from "./pages/CreatePin";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
       <Routes>
        <Route path="/Pinterestclone" element={<Home />} />
        <Route path="/CreatePin" element={<CreatePin />} />
      </Routes>
    </>
  );
}

export default App;
