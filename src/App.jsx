import { NavLink, Route, Routes, useNavigate } from "react-router";
import "./App.css";
import HomePage from "./HomePage";
import CatalogPage from "./CatalogPage";
import ProductPage from "./ProductPage";
import ProfilePage from "./ProfilePage";
import { useState } from "react";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "./NotFoundPage";

function App() {
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/profile')
    setAuth((prevVal) => !prevVal);
  };

  return (
    <>
      <nav>
        <NavLink to={"/"}>HomePage </NavLink>|
        <NavLink to={"/catalog"}> CatalogPage </NavLink>|
        <NavLink to={"/profile"}> ProfilePage</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/login"
          element={<Login handleClick={handleClick} />}
        />
        <Route element={<PrivateRoute auth={auth}/>}>
          <Route path="/profile" element={<ProfilePage handleClick={handleClick}/>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
