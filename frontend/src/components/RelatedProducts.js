import React,{useEffect,useState}  from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RelatedProducts = ({ mainProductCategory, productId}) => {

    const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const result = await axios.get(`/api/products/${mainProductCategory}?productId=${productId}`);
        setRelatedProducts(result.data);
      
      } catch (error) {
        // Handle error
      }
    };
    fetchRelatedProducts();
  }, [mainProductCategory,productId]);

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      {relatedProducts.length === 0 ? (
        <div>No related Product</div>
      ) : (
    
    <div className="products-container">
      {relatedProducts.map((product) => (
        <div key={product._id} className="related-product-card">
          <Link to={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} className="related-img" />
          </Link>
          <div className="product-info">
            <Link to={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </Link>
            <p>
              <strong>${product.price}</strong>
            </p>
         
          </div>
        </div>
      ))}
    </div>
      )}
  </div>
      
  )}


export default RelatedProducts;