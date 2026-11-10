import { NavLink, Route, Routes, useNavigate } from "react-router";
import "./App.css";
import HomePage from "./HomePage";
import { lazy, Suspense, useState } from "react";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "./NotFoundPage";

const CatalogPage = lazy(() => import("./CatalogPage"));
const ProductPage = lazy(() => import("./ProductPage"));
const ProfilePage = lazy(()=> import('./ProfilePage'));

function App() {
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
    setAuth((prevVal) => !prevVal);
  };

  return (
    <>
      <nav>
        <NavLink to={"/"}>HomePage </NavLink>|
        <NavLink to={"/catalog"}> CatalogPage </NavLink>|
        <NavLink to={"/profile"}> ProfilePage</NavLink>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />

          <Route path="/login" element={<Login handleClick={handleClick} />} />
          <Route element={<PrivateRoute auth={auth} />}>
            <Route
              path="/profile"
              element={<ProfilePage handleClick={handleClick} />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
