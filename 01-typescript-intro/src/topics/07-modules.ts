import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'iPad',
        price: 250
    }
];

const [ total, tax ]: number[] = taxCalculation({
    tax: .15,
    products: shoppingCart
});

console.log('Total', total);
console.log('Tax', tax);

