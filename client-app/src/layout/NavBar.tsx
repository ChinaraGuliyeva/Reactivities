import { Container, Menu, Button } from "semantic-ui-react";

interface NavBarProps {
  openForm: () => void;
}

const NavBar = ({openForm}: NavBarProps) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" className="logo-img"/>
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive content="Create Activity" onClick={openForm}/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;