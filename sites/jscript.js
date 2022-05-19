function darklight() {
    var element = document.body;
    element.classList.toggle("darkmodeoff");
}

function profileHandler(value) {
    window.location.assign(`${value}.html`);
}

function urlHandler(value) {                               
    window.location.assign(`${value}`);
}