export function formatPrice(price : number){
    const priceFormated = new Intl.NumberFormat('es-PE',{
        style:"currency",
        currency: "PEN"
    })
    const finalPrice = priceFormated.format(price)
    return finalPrice
}