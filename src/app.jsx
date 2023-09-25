import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <section className="pt-10 bg-stone-400 min-h-screen">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
      </Routes>
    </section>
  );
}

export default App;
