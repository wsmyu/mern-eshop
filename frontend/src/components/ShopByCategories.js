import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShopByCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await axios.get(`/api/products/categories`);
        setCategories(result.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const getCategoryImage = (categoryName) => {
    const fileName = `${categoryName}.jpg`;
    try {
      const image = require(`../images/${categoryName}.jpg`);
      return image.default;
    } catch (error) {
      console.error(`Category image not found for "${categoryName}"`);
      return null;
    }
  };

  return (
    <div className="shop-by-categories-container">
      <h2 style={{ color:"#ad9455"}}>Shop by Categories</h2>
      <div className="category-links">
        {categories.map((category) => (
          <Link
            key={category}
            to={{
              pathname: "/search",
              search: `?category=${category}`,
            }}
            className="category-link"
          >
            <div className="image-container">
                 <img className='category-image' src={getCategoryImage(category)} alt={category} />
                 <span className="category-text">{category}</span>
            </div>
           
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
