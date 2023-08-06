import React, { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from 'react-bootstrap/Row';
import Product from '../components/Product'
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Slider from "../components/Slider";
import ShopByCategories from "../components/ShopByCategories";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const HomePage = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });


  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/search');
  };
  return (
    <div>

        <Helmet>
            <title>E-shop</title>
        </Helmet>
        <div className="slider">
             <Slider />
        </div>
     
      <h2 style={{ color:"#ad9455"}}>Featured Products</h2>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
            <Row>
            {products.map((product) => (
             <Col key={product.slug} sm={6} md={4} lg={3} className='mb-3'>
               <Product product={product} />
            </Col>
            ))}
          </Row>
        )}
      </div>
      <div>
        <ShopByCategories />
        <div className="banner-container">
             <img className='shop-now-banner'src='../images/ShopNowBanner.jpg' />
             <button onClick={handleShopNowClick} className="shop-now-button">Shop Now</button>
        </div>
     
      </div>
    </div>
  );
};

export default HomePage;
