import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPages from "./pages/LoginPages";
import CallbackPages from "./pages/CallbackPages";
import MainPages from "./pages/MainPages";
import PrivatePages from "./pages/PrivatePages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/callbackpage" element={<CallbackPages />} />
        <Route element={<PrivatePages />}>
          <Route path="/mainpage" element={<MainPages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
