const logButton = document.getElementById("log-button")
const popupWraper = document.getElementById("popup-wrapper")
const closeButton = document.getElementById("close-button")
const logPopup = document.getElementById("log-popup")

logButton.addEventListener("click", (event) => {
    showPopup();
});

popupWraper.addEventListener("click", (event) => {
    hidePopup();
});

closeButton.addEventListener("click", (event) => {
    hidePopup();
})

logPopup.addEventListener("click", (event) => {
    event.stopPropagation();
})

function showPopup() {
    popupWraper.style.display = "block";
};

function hidePopup() {
    popupWraper.style.display = "none";
};