import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Anas',
      email: 'anas.coding404@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Osama',
      email: 'osama@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Ring',
      slug: 'free-ring1',
      category: 'Rings',
      image: '/images/ring.jpg',
      price: 70,
      brand: 'fashion',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Free Earrings',
      slug: 'free-earrings1',
      category: 'Earrings',
      image: '/images/erring.jpg',
      price: 70,
      brand: 'fashion',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Earrings',
    },

    {
      name: 'Free Neckllace',
      slug: 'free-neckllace1',
      category: 'Neckllace',
      image: '/images/Neckllace2.jpg',
      price: 70,
      brand: 'fashion',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular neckllace',
    },
    {
      name: 'Free Bracelet',
      slug: 'free-bracelet1',
      category: 'Bracelet',
      image: '/images/Bracelet.jpg',
      price: 70,
      brand: 'fashion',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Bracelet',
    },
  ],
};

export default data;
