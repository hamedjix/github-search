import Layout from "components/Layout";
import { useAuth } from "context/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Search from "./pages/search";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <Layout>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Search />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}

export default App;
