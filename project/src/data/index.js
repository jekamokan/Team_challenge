import boot1 from '../images/boot1.jpg'
import boot2 from '../images/boot2.jpg'
import boot3 from '../images/boot3.jpg'
import boot4 from '../images/boot4.jpg'

export const sortValues = [
    { name: 'Featured', id: 0 },
    { name: 'Newest', id: 1 },
    { name: 'Price (High - Low)', id: 2 },
    { name: 'Price (Low - High)', id: 3 },
    { name: 'Top Sellers', id: 4 },
    { name: 'Discount', id: 5 },
]
export const sizeValue = [];
for (let i = 4.5; i <= 14; i += 0.5) {
    sizeValue.push(i);
}
export const discountData = [
    { name: 'Up to 20%' },
    { name: '20%-30%' },
    { name: '30%-40%' },
    { name: '40% or more' },
]
export const bestForData = [
    { name: 'Neutral' },
    { name: 'Walking' },
    { name: 'Marathon' },
    { name: 'Race' },
    { name: 'Running' },
    { name: 'Triathlon' },
]
export const bestSellersData = [
    {
        name: 'Nike Vomero 1',
        price: [
            {oldPrice: 2879},
            {newPrice: 899}
        ],
        image: boot1,
        options: ['Sale', 'Suede', 'Comfort+'],
        article: '243R8119',
        feedback: 98
    },
    {
        name: 'Nike Vomero 2',
        price: [
            {oldPrice: 2879},
            {newPrice: 899}
        ],
        image: boot2,
        options: ['Sale', 'Suede', 'Comfort+'],
        article: '243R8119',
        feedback: 85
    },
    {
        name: 'Nike Vomero 3',
        price: [
            {oldPrice: 2879},
            {newPrice: 899}
        ],
        image: boot3,
        options: ['Sale', 'Suede', 'Comfort+'],
        article: '243R8119',
        feedback: 73
    },
    {
        name: 'Nike Vomero 4',
        price: [
            {oldPrice: 2879},
            {newPrice: 899}
        ],
        image: boot4,
        options: ['Sale', 'Suede', 'Comfort+'],
        article: '243R8119',
        feedback: 99
    },
    // {
    //     name: 'Nike Vomero 5',
    //     price: 505,
    //     image: boots,
    //     options: ['Unisex', 'Sport Shoes', 'New Arrival'],
    //     colors: '4 colors, complete set',
    //     feedback: 111
    // },
]