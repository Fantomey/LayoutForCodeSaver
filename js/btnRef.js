document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.mozUserSelect = 'none';
document.body.style.msUserSelect = 'none';





let btnRefXbox = document.querySelector(".btn-choose-xbox")
btnRefXbox.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'xboxkey.html';
    }, 200);
})
let btnRefSpotify = document.querySelector(".btn-choose-spotif")
btnRefSpotify.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'spotify.html';
    }, 200);
})
let btnRefGameKeys = document.querySelector(".btn-choose-game")
btnRefGameKeys.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'gamekeys.html';
    }, 200);
})
let btnRefGift = document.querySelector(".btn-choose-gift")
btnRefGift.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'giftcards.html';
    }, 200);
})


const exitLog = document.getElementById("exit")
exitLog.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 200);
})
