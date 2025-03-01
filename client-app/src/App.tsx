import { Container } from "semantic-ui-react";
import "./App.css";
import NavBar from "./layout/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./features/home/HomePage";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container className="reactivities-container">
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
};

export default App;
