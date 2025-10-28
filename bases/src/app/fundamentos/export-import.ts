import {Product, taxCalculation,TaxCalculationOptions} from './desestructuring'

export const shoppingCart : Product[] = [
  {
    description : 'SAMSUNG',
    price : 200.3
  },
  {
    description : 'APPLE',
    price : 500
  }
]


const [total, totalRealSum] = taxCalculation({tax : 0.15,products:shoppingCart})
console.log(total,totalRealSum);
