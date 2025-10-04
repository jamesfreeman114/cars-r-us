import { setTechId } from "./transientState.js"

const techChoiceHandler = (changeEvent) => {
   if (changeEvent.target.id === "tech") {
      const chosenOption = parseInt(changeEvent.target.value)
      setTechId(chosenOption)
   }
}



export const techOptions = async () => {

    document.addEventListener("change", techChoiceHandler)

    const response = await fetch("http://localhost:8088/displays")
    const techOptions = await response.json()

    let html = `<select id="tech">
                        <option value="0">Prompt to select resource...</option>`

    const techOptionsHTML = techOptions.map (
        (techOption) => {
            return `
                        <option value="${techOption.id}">${techOption.option}</option>`
        }
    )

    html += techOptionsHTML.join("")

    html += `</select>`

    return html


}