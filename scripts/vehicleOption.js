import { setVehicleId } from "./transientState.js"

const vehicleChoiceHandler = (changeEvent) => {
   if (changeEvent.target.id === "vehicle") {
      const chosenOption = parseInt(changeEvent.target.value)
      setVehicleId(chosenOption)
   }
}

export const vehicleOptions = async () => {
    document.addEventListener("change", vehicleChoiceHandler)

    const response = await fetch("http://localhost:8088/vehicles")

    const vehicles = await response.json()

    let html = `<select id="vehicle">
                        <option value="0">Choose vehicle type...</option>`

    const vehicleChoiceHTML = vehicles.map(
        (vehicle) => {
            return `<option value="${vehicle.id}">${vehicle.option}</option>`
        })

    html += vehicleChoiceHTML.join("")

    html += `</select>`

    return html
}