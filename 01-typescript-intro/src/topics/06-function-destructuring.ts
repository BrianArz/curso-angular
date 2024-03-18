
interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.00
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

function taxCalculation( options: TaxCalculationOptions ): [number, number] {
    let total = 0;
    const { tax, products } = options;
    
    products.forEach( ({ price }) => {
        total += price;
    });

    return [ total, total * tax ];
}

const shoppingCart = [ phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax: tax
});

const [ resultTotal, resultTax ]: number[] = result;

console.log('Total', resultTotal);
console.log('Tax', resultTax);

export{};