import { wheelOptions } from "./wheels.js";
import { interiorOptions } from "./interiors.js";
import { paintOptions } from "./paints.js";
import { techOptions } from "./technologies.js";
import { orderSubmissionButton } from "./orderButton.js";
import { displayOrders } from "./orderList.js";

const container = document.querySelector("#container")

const render = async () => {
    const wheelsHTML = await wheelOptions()
    const interiorsHTML = await interiorOptions()
    const paintsHTML = await paintOptions()
    const techHTML = await techOptions()
    const orderButtonHTML = await orderSubmissionButton()
    const orderListHTML = await displayOrders()

    const composedHTML = `
    <h1>Cars-R-Us</h1>

    <article class="choices">
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelsHTML}
            </section>
            <section class="choices__tech options">
                <h2>Technologies</h2>
                ${techHTML}
            </section>
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintsHTML}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiorsHTML}
            </section>
    </article>

    <article class ="orders">
            <section class="order-button">
                ${orderButtonHTML}
            </section>
            <section class="display-orders">
                ${orderListHTML}
            </section>
    </article>
        
    `
    container.innerHTML = composedHTML

    

}

document.addEventListener("stateChanged", event => {
    console.log("New order placed, rendering HTML... ")
    render()
})

render()