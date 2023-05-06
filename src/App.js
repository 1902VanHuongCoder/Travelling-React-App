import SearchAppBar from "./component/AppBar"
import "./App.css";
import Home from "./pages/Home"
import Tour from "./pages/Tour"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Tour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
