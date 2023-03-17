import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Search from "./pages/search";

function App() {
  const API_URL = "https://api.github.com/search/repositories";
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
