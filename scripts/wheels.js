import { setWheelId } from "./transientState.js"

const wheelChoiceHandler = (changeEvent) => {
   if (changeEvent.target.id === "wheels") {
      const chosenOption = parseInt(changeEvent.target.value)
      setWheelId(chosenOption)
   }
}



export const wheelOptions = async () => {

    document.addEventListener("change", wheelChoiceHandler)

    const response = await fetch("http://localhost:8088/wheels")
    const wheelOptions = await response.json()

    let html = `<select id="wheels">
                        <option value="0">Choose wheel type...</option>`

    const wheelOptionsHTML = wheelOptions.map (
        (wheelOption) => {
            return `
                        <option value="${wheelOption.id}">${wheelOption.option}</option>`
        }
    )

    html += wheelOptionsHTML.join("")

    html += `</select>`

    return html


}