export function formatPrice(price : number){
    const priceFormated = new Intl.NumberFormat('es-PE',{
        style:"currency",
        currency: "PE"
    })
    const finalPrice = priceFormated.format(price)
    return finalPrice
}