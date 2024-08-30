document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.mozUserSelect = 'none';
document.body.style.msUserSelect = 'none';


const choose = document.querySelector(".selector");
const choosed = document.querySelector(".choosed");
const divPara = document.querySelector(".para");

const allEnabledCode = {
    fMonth: ["U1V2W3X4Y53K6FKEU"],
    sMonth: [""],
    tMonth: ["T6U7V8W9X02FGQAW6"]
};

function updateCode() {
    divPara.innerHTML = '';

    let codesArray = [];
    let header = '';

    if (choosed.value === "1m") {
        codesArray = allEnabledCode.fMonth;
        header = "Code for 1 Month:";
    } else if (choosed.value === "3m") {
        codesArray = allEnabledCode.sMonth;
        header = "Code for 3 Month:";
    } else if (choosed.value === "6m") {
        codesArray = allEnabledCode.tMonth;
        header = "Code for 6 Month:";
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
