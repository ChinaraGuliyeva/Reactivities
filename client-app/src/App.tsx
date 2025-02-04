import { Container } from "semantic-ui-react";
import "./App.css";
import NavBar from "./layout/NavBar";
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <>
      <NavBar />
      <Container className="reactivities-container">
        <Outlet />
      </Container>
    </>
  );
};

export default App;
