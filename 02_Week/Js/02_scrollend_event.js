const output = document.getElementById("output");

document.addEventListener("scroll", (event) => {
    output.textContent = "Document scroll event fired!"
});

document.addEventListener("scrollend", (event) => {
    output.textContent = "Document scrollend event fired!"
})