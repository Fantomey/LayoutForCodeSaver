document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.mozUserSelect = 'none';
document.body.style.msUserSelect = 'none';

const choose = document.querySelector(".selector");
const choosed = document.querySelector(".choosed");
const divPara = document.querySelector(".para");

const allEnabledCode = {
    fiveDolars: ["2PCMZ-24PDL-VHJPD", "7PL9X-8MNRQ-4ZTYS", "WQ4HV-L2DFK-8XNTM"],
    tenDolars: [""],
    twentyDolars: ["KVDT9-NR4PW-6CMXZ"],
    fiftyDolars: ["XG8FZ-KP2LN-3BVDQ"]
};

function updateCode() {
    divPara.innerHTML = '';

    let codesArray = [];
    let header = '';

    if (choosed.value === "5dol") {
        codesArray = allEnabledCode.fiveDolars;
        header = "Code on 5 Dollars:";
    } else if (choosed.value === "10dol") {
        codesArray = allEnabledCode.tenDolars;
        header = "Code on 10 Dollars:";
    } else if (choosed.value === "20dol") {
        codesArray = allEnabledCode.twentyDolars;
        header = "Code on 20 Dollars:";
    } else if (choosed.value === "50dol") {
        codesArray = allEnabledCode.fiftyDolars;
        header = "Code on 50 Dollars:";
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
