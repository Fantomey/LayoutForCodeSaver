document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.mozUserSelect = 'none';
document.body.style.msUserSelect = 'none';

const choose = document.querySelector(".selector");
const choosed = document.querySelector(".choosed");
const divPara = document.querySelector(".para");

const allEnabledCode = {
    steam: ["ST3AM-5C4N5-2V3MB", "ST3AM-B5N6K-R9X8L", "ST3AM-7F8P2-0V4QS"],
    epicGames: ["EPI1C-G4M3-7X2Q9"],
    origin: ["0R1G1N-8D7K9-2J4N5", "0R1G1N-1F4G7-K9Q2B"]
};

function updateCode() {
    divPara.innerHTML = '';

    let codesArray = [];
    let header = '';

    if (choosed.value === "steam") {
        codesArray = allEnabledCode.steam;
        header = "Codes for Steam:";
    } else if (choosed.value === "epic-games") {
        codesArray = allEnabledCode.epicGames;
        header = "Codes for Epic Games:";
    } else if (choosed.value === "Origin") {
        codesArray = allEnabledCode.origin;
        header = "Codes for Origin:";
    }


    if (!codesArray || codesArray.length === 0 || (codesArray.length === 1 && codesArray[0] === "")) {
        divPara.innerHTML = "Code right now is unavailable";
        return;
    }

    const headerElement = document.createElement('p');
    headerElement.textContent = header;
    divPara.appendChild(headerElement);

    codesArray.forEach(code => {
        const codeElement = document.createElement('p');
        codeElement.textContent = code;
        codeElement.classList.add('allow-copy');
        codeElement.classList.add('exte');
        divPara.appendChild(codeElement);
    });
}


if (choosed) {
    choosed.addEventListener("change", updateCode);
    updateCode();
}


const back = document.getElementById("back")
back.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'choose.html';
    }, 500);
})
