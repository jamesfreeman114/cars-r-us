export const displayOrders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=color&_expand=display&_expand=interior&_expand=wheel&_expand=vehicle")

    const orders = await response.json()

    let html = ""

    const displayOrderHTML = orders.map(
        (order) => {

            const orderPrice = order.color.price + order.display.price + order.interior.price + order.wheel.price

            const vehiclePrice = orderPrice * order.vehicle.multiplier

            const dollarPrice = vehiclePrice.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                    })

            return `<section class="order-list"> Order#${order.id}: Vehicle type: ${order.vehicle.option}, Color: ${order.color.option}, Display type: ${order.display.option}, Interior: ${order.interior.option}, Wheels: ${order.wheel.option}. Total Cost:${dollarPrice}</section>`
        }
    )

    html += displayOrderHTML.join("")

    return html
}