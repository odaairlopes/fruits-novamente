import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FruitsList from "./pages/fruits";
import Home from "./pages/home";
import api from "./services/api/api";
import { useState } from "react";
import { IFruitList } from "./types/fruits";
import FruitsDetails from "./pages/fruits-details";

function App() {
  const [fruits, setFruits] = useState<IFruitList[]>([]);
  api
    .get("/fruits-api/fruits.json")
    .then((res) => setFruits(res.data))
    .catch((err) => console.log(err));

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/fruits" element={<FruitsList fruits={fruits} />} />
        <Route path="/fruits-details" element={<FruitsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
