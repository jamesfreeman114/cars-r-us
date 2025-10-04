import { setInteriorId } from "./transientState.js"

const interiorChoiceHandler = (changeEvent) => {
   if (changeEvent.target.id === "interior") {
      const chosenOption = parseInt(changeEvent.target.value)
      setInteriorId(chosenOption)
   }
}

export const interiorOptions = async () => {

    document.addEventListener("change", interiorChoiceHandler)

    const response = await fetch("http://localhost:8088/interiors")
    const interiorOptions = await response.json()

    let html = `<select id="interior">
                        <option value="0">Prompt to select resource...</option>`

    const interiorOptionsHTML = interiorOptions.map (
        (interiorOption) => {
            return `
                        <option value="${interiorOption.id}">${interiorOption.option}</option>`
        }
    )

    html += interiorOptionsHTML.join("")

    html += `</select>`

    return html

}

