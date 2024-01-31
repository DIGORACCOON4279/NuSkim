const paragraphs = document.querySelectorAll(".paragraph");
const sections = document.querySelectorAll(".section")

paragraphs.forEach(paragraph => {
    paragraph.addEventListener("dragstart", (e) => {
        console.log("Inicio de arrastre");
        console.log("Estoy arrastrando el parrafo: " + paragraph.textContent)
        paragraph.classList.add("dragging");
        e.dataTransfer.setData("id", paragraph.id);
    });

    paragraph.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        paragraph.classList.remove("dragging");
    });
})

sections.forEach(section => {
    section.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("DragOver");
    });

    section.addEventListener("drop", (e) => {
        const id_paragraph = e.dataTransfer.getData("id");
        // console.log("Paragraph id: ", id_paragraph);
        const paragraph = document.getElementById(id_paragraph);
        section.appendChild(paragraph);
    });
})
