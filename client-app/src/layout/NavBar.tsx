import { Container, Menu, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img src="/assets/logo.png" alt="logo" className="logo-img" />
          Reactivities
        </Menu.Item>
        <Menu.Item  as={NavLink} to='/activities' name="Activities"  />
        <Menu.Item>
          <Button
            positive
            content="Create Activity"
            as={NavLink}
            to="/createActivity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
