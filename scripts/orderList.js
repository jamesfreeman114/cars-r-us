export const displayOrders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=color&_expand=display&_expand=interior&_expand=wheel")

    const orders = await response.json()

    let html = ""

    const displayOrderHTML = orders.map(
        (order) => {

            const orderPrice = order.color.price + order.display.price + order.interior.price + order.wheel.price

            const dollarPrice = orderPrice.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                    })

            return `<section class="order-list"> Order#${order.id}: ${order.color.option}, ${order.display.option}, ${order.interior.option}, ${order.wheel.option} Cost:${dollarPrice}</section>`
        }
    )

    html += displayOrderHTML.join("")

    return html
}