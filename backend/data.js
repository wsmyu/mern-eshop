import bcrypt from 'bcryptjs';

const data = {
    users:[
      {
        name:'Michelle',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456'),
        isAdmin:true
      },
      {
        name:'John',
        email:'user@example.com',
        password:bcrypt.hashSync('123456'),
        isAdmin:false,
      },
    ],
    products: [
      {
        name: 'Brown Jacket',
        slug: 'brown-jacket',
        category: 'Jacket',
        image: '/images/brownjacket.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'ABC',
        rating: 4.5,
        numReviews: 10,
        description: 'Loose-fit, trucker-style crop jacket. Collar, buttons at front, and yoke at front and back. Dropped shoulders, button at cuffs, and chest pockets with flap and button.',
      },
      {
        name: 'Navy flag tee',
        slug: 'navy-flag-tee',
        category: 'T-shirts',
        image: '/images/flagtee.jpg',
        price: 60,
        countInStock: 20,
        brand: 'ABC',
        rating: 4.0,
        numReviews: 10,
        description: 'Oversized T-shirt in soft cotton jersey with a printed motif at front. Ribbed neckline and heavily dropped shoulders.',
      },
      {
        name: 'Blue Shirt',
        slug: 'blue-shirt',
        category: 'Shirts',
        image: '/images/blueshirt.jpg',
        price: 59,
        countInStock: 0,
        brand: 'ABC',
        rating: 4.5,
        numReviews: 14,
        description: 'Relaxed-fit shirt in woven cotton fabric. Collar, buttons at front, and yoke at back with box pleat. Open chest pocket, dropped shoulders, and long sleeves with button at cuffs. Gently rounded hem.',
      },
      {
        name: 'Black Shirt',
        slug: 'black-shirt',
        category: 'T-shirts',
        image: '/images/black_tshirt.jpg',
        price: 69,
        countInStock: 10,
        brand: 'Herschel',
        rating: 4.5,
        numReviews: 14,
        description: 'Short, fitted top in soft cotton jersey. Low-cut neckline, short sleeves, and a straight-cut hem.',
      },
      {
        name: 'Pink Dress',
        slug: 'pink-dress',
        category: 'Dress',
        image: '/images/pinkdress.jpg',
        price: 49,
        countInStock: 10,
        brand: 'ABC',
        rating: 4.5,
        numReviews: 14,
        description: 'Calf-length dress in woven, crêped fabric. Square neckline at front and back, smocked bodice, and long sleeves. Narrow elastic at neckline, over shoulders, and at cuffs. Gently flared skirt and a gathered tier above hem for added volume. Unlined.',
      },
     
      {
        name: 'Black Dress',
        slug: 'black-dress',
        category: 'Dress',
        image: '/images/blackdress.jpg',
        price: 59,
        countInStock: 10,
        brand: 'ABC',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
          
      {
        name: 'Grey Jacket',
        slug: 'grey-jacket',
        category: 'Jacket',
        image: '/images/greyjacket.jpg',
        price: 79,
        countInStock: 10,
        brand: 'ABC',
        rating: 4.5,
        numReviews: 14,
        description: 'This cute windbreaker jacket features a full zipper closure, front pockets, drawcord hem and banded sleeve cuffs. Imported.',
      },
     
    ],
  };
  export default data;