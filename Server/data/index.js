import bcrypt from 'bcryptjs';

const data = {
	users: [
		{
			name: 'admin',
			email: 'admin@gmail.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: true,
		},
		{
			name: 'test',
			email: 'test@gmail.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: false,
		},
		{
			name: 'omar',
			email: 'omar@gmail.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: false,
		},
		{
			name: 'test2',
			email: 'test2@gmail.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: false,
		},
	],
	products: [
		{
			name: 'Nike Slim shirt',
			description: 'high quality shirt',
			category: ['Shirts'],
			price: 120,
			countInStock: 10,
			brand: 'Nike',
			rating: 3,
			numReviews: 10,
			image: '/images/p1.jpg', // 679px × 829px
		},
		{
			name: 'Adidas Fit Shirt',
			category: ['Shirts'],
			image: '/images/p2.jpg',
			price: 250,
			countInStock: 0,
			brand: 'Adidas',
			rating: 4.0,
			numReviews: 10,
			description: 'high quality product',
		},
		{
			name: 'Nike Slim Pant',
			category: ['Pants'],
			image: '/images/p3.jpg',
			price: 25,
			countInStock: 15,
			brand: 'Nike',
			rating: 4.5,
			numReviews: 14,
			description: 'high quality product',
		},
		{
			name: 'Adidas Fit Pant',
			category: ['Pants'],
			image: '/images/p4.jpg',
			price: 65,
			countInStock: 5,
			brand: 'Puma',
			rating: 4.5,
			numReviews: 10,
			description: 'high quality product',
		},
	],
};
export default data;
