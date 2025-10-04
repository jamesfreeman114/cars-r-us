import { placeOrder } from "./transientState.js"

const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "order-button") {
        placeOrder()

    }

}


export const orderSubmissionButton = async () => {

    document.addEventListener("click", handleOrderSubmission)
    
    let html = ""
            
    html += `<button id="order-button">Place Order</button>
            </div>
            `

    return html 
    
}