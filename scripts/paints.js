import { setPaintId } from "./transientState.js"

const paintChoiceHandler = (changeEvent) => {
   if (changeEvent.target.id === "paint") {
      const chosenOption = parseInt(changeEvent.target.value)
      setPaintId(chosenOption)
   }
}

export const paintOptions = async () => {

    document.addEventListener("change", paintChoiceHandler)

    const response = await fetch("http://localhost:8088/colors")
    const paintOptions = await response.json()

    let html = `<select id="paint">
                        <option value="0">Choose paint color...</option>`

    const paintOptionsHTML = paintOptions.map (
        (paintOption) => {
            return `
                        <option value="${paintOption.id}">${paintOption.option}</option>`
        }
    )

    html += paintOptionsHTML.join("")

    html += `</select>`

    return html


}