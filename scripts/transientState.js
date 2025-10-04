const transientState = {
    colorId: 0,
    displayId: 0,
    interiorId: 0,
    wheelId: 0
}

export const setPaintId = (chosenOwnership) => {
    transientState.colorId = chosenOwnership
}

export const setTechId = (chosenOwnership) => {
    transientState.displayId = chosenOwnership
}

export const setInteriorId = (chosenOwnership) => {
    transientState.interiorId = chosenOwnership
}

export const setWheelId = (chosenOwnership) => {
    transientState.wheelId = chosenOwnership
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"    
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("stateChanged")
    document.dispatchEvent(customEvent)


}