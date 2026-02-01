
const messages = [
    "are you sure?",
    "really sure??",
    "are you positive?",
    "just think about it!",
    "if you say no, i'll be really sad...",
    "i will be very sad...",
    "i will be very very very sad...",
    "ok fine, i'll stop asking...",
    "just kidding, say yes. please? ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}