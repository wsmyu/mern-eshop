import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductPage from "./Pages/ProductPage";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge";
import { Store } from "./Store";
import Nav from "react-bootstrap/Nav";
import { useContext, useState, useEffect } from "react";
import CartPage from "./Pages/CartPage";
import SigninPage from "./Pages/SigninPage";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShippingAddressPage from "./Pages/ShippingAddressPage";
import SignUpPage from "./Pages/SignUpPage";
import PaymentMethodPage from "./Pages/PaymentMethodPage";
import PlaceOrderPage from "./Pages/PlaceOrderPage";
import OrderPage from "./Pages/OrderPage";
import OrderHistoryPage from "./Pages/OrderHistoryPage";
import ProfilePage from "./Pages/ProfilePage";
import Button from "react-bootstrap/Button";
import getError from "./util";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import SearchPage from "./Pages/SearchPage";
import Footer from "./components/Footer";
import ShippingPolicyPage from "./Pages/ShippingPolicyPage";
import FaqPage from "./Pages/FaqPage";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };
  const [sidebarOpen, setSidbarOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <div className={sidebarOpen ? "active-cont" : ""}>
          <ToastContainer position="bottom-center" limit={1} />
          <header>
            <Navbar className="navbar" expand="lg">
              <Container>
                <Button onClick={() => setSidbarOpen(!sidebarOpen)}>
                  <i className="fas fa-bars"></i>
                </Button>

                <LinkContainer to="/">
                  <Navbar.Brand>E-shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <SearchBox />
                  <Nav className="me-auto w-100 justify-content-end">
                    <Link to="/cart" className="nav-link">
                      Cart
                      {cart.cartItems.length > 0 && (
                        <Badge pill bg="danger">
                          {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                        </Badge>
                      )}
                    </Link>
                    {userInfo ? (
                      <NavDropdown
                        title={userInfo.name}
                        id="basic-nav-dropdown"
                      >
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>User Profile</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to="/orderhistory">
                          <NavDropdown.Item>Order History</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                      </NavDropdown>
                    ) : (
                      <Link className="nav-link" to="/signin">
                        Sign in
                      </Link>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
          <div
            className={
              sidebarOpen
                ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
                : "side-navbar d-flex justify-content-between flex-wrap flex-column"
            }
          >
            <Nav className="flex-column w-100 p-2">
              <Nav.Item style={{ color: "rgb(165, 110, 42)" }}>
                <strong>Categories</strong>
              </Nav.Item>
              {categories.map((category) => (
                <Nav.Item key={category}>
                  <LinkContainer
                    to={{
                      pathname: "/search",
                      search: `?category=${category}`,
                    }}
                    onClick={() => setSidbarOpen(false)}
                  >
                    <Nav.Link className="navbar-category">{category}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/shipping" element={<ShippingAddressPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/payment" element={<PaymentMethodPage />} />
                <Route path="/placeorder" element={<PlaceOrderPage />} />
                <Route path="/order/:id" element={<OrderPage />} />
                <Route path="/orderhistory" element={<OrderHistoryPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route
                  path="/shippingpolicy"
                  element={<ShippingPolicyPage />}
                />
                <Route path="/faq" element={<FaqPage />} />
              </Routes>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
