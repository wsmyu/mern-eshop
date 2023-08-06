import React,{useContext} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Rating from './Rating';
import axios from 'axios';
import { Store } from '../Store';


const Product = ({product}) => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      cart: { cartItems },
    } = state;

    const addToCartHandler= async (item)=>{
        const existItem = cartItems.find((x)=>x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1 ;
        const { data } = await axios.get(`/api/products/${product._id}`)
        if (data.countInStock < quantity){
            window.alert('Sorry,Product is out of stock');
            return;
        }
        ctxDispatch({type:'CART_ADD_ITEM',
        payload:{...product,quantity},
        })

      }

  return (
    <Card className="product-card">
        <Link to={`/product/${product.slug}`}>
            <div className="card-img-container">
                <img src={product.image}  alt={product.name} className="card-img" />
            </div>
        </Link>
        <Card.Body>
            <Link className='card-title' to={`/product/${product.slug}`}>
            <Card.Title >{product.name}</Card.Title>
            </Link>
            <Rating rating ={product.rating} numReviews={product.numReviews} />
            <Card.Text className='card-text'>${product.price}</Card.Text>
            {product.countInStock === 0 ? <Button variant='light' disabled>Out of Stock</Button>
            :
            <Button onClick={()=>addToCartHandler(product)}>Add to cart</Button>
            }
            
        </Card.Body>
       
    </Card>
  )
}

export default Product
