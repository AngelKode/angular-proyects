export interface Product{
  description : String,
  price : number
}

export interface TaxCalculationOptions{
  tax : number,
  products : Product[]
}
export function taxCalculation (taxOptions : TaxCalculationOptions) : [number,number] {
  let total = 0;
  const {tax,products} = taxOptions;

  products.forEach((product) => {
    total += product.price
  })

  return [total, (total * tax) + total]
}
