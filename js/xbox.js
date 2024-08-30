document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.mozUserSelect = 'none';
document.body.style.msUserSelect = 'none';



const choose = document.querySelector(".selector");
const choosed = document.querySelector(".choosed");
const divPara = document.querySelector(".para");

const allEnabledCode = {
    fMonth: ["PCTAF-44DF7-9PQWY-X4V4P-Q29TZ", "EWKPK-QTF3V-FXRBR-V33SP-V543D", "44VD3-MVV4P-GQD9P-QLHD9-TVYD6"],
    sMonth: [""],
    tMonth: ["QASD4-DQW42-DQ2WS-CD4V-RD234", "FW7RF-5HGTY-2TVBT-9V4BV-VRTC8"]
};

function updateCode() {
    divPara.innerHTML = '';

    let codesArray;
    let header;

    if (choosed.value === "1m") {
        codesArray = allEnabledCode.fMonth;
        header = "Codes for 1 month:";
    } else if (choosed.value === "2m") {
        codesArray = allEnabledCode.sMonth;
        header = "Codes for 2 month:";
    } else if (choosed.value === "3m") {
        codesArray = allEnabledCode.tMonth;
        header = "Codes for 3 month:";
    }


    if (codesArray.length === 1) {
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
        codeElement.classList.add('ex');
        divPara.appendChild(codeElement);
    });
}

choosed.addEventListener("change", updateCode);
updateCode();






const back = document.getElementById("back")
back.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'choose.html';
    }, 500);
})




