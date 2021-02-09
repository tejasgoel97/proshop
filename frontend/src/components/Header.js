import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const UserData = useSelector(state => state.User);
  const { loading, userInfo, error } = UserData;
  console.log(userInfo)
  const handleLogout = () => {
    console.log('LOGOUR')
  }

  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>

              {
                userInfo ? <NavDropdown title={userInfo.email}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item to='/profile'>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
                  : <LinkContainer to="/user">
                    <Nav.Link>
                      <i className="fas fa-user"></i>SignIn
                </Nav.Link>
                  </LinkContainer>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  );
};

export default Header;
