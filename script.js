const logButton = document.getElementById("log-button")
const popupWrapper = document.getElementById("popup-wrapper")
const closeButton = document.getElementById("close-button")
const logPopup = document.getElementById("log-popup")

logButton.addEventListener("click", (event) => {
    showPopup();
});

popupWrapper.addEventListener("click", (event) => {
    hidePopup();
});

closeButton.addEventListener("click", (event) => {
    hidePopup();
})

logPopup.addEventListener("click", (event) => {
    event.stopPropagation();
})

function showPopup() {
    popupWrapper.style.display = "block";
};

function hidePopup() {
    popupWrapper.style.display = "none";
};