import bycrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'John',
            email: 'admin@example.com',
            password: bycrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Jane',
            email: 'user@example.com',
            password: bycrypt.hashSync('123456'),
            isAdmin: false
        },
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/donut1.png',
            price: 74,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 10,
            countInStock: 27,
            description: 'A popular shirt'
        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 70,
            brand: 'Adidas',
            rating: 4,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Golf Pant',
            slug: 'golf-pant',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 4.5,
            numReviews: 12,
            countInStock: 6,
            description: 'Smart looking pant'
        },
        {
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 85,
            brand: 'Raymond',
            rating: 4.5,
            numReviews: 15,
            countInStock: 16,
            description: 'A popular shirt'
        },
        {
            name: 'Classic Pant',
            slug: 'classic-pant',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 95,
            brand: 'Zara',
            rating: 4,
            numReviews: 8,
            countInStock: 10,
            description: 'A popular pant'
        },
        {
            name: 'Workout pant',
            slug: 'workout-pant',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 65,
            brand: 'Reebok',
            rating: 4,
            numReviews: 12,
            countInStock: 2,
            description: 'A fitness pant'
        },
    ]
}

export default data