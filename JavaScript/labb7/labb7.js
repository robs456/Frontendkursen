let button1 = document.getElementById('butt1');

button1.addEventListener("click", changeText1);

function changeText1(){

    let para1 = document.querySelector('#para');
    para1.textContent = "Denna paragraf är ny och fräsch.";
}

let button2 = document.querySelector('#butt2');

button2.addEventListener("click", changeLink2);

function changeLink2(){
    document.querySelector("a").href = "https://google.com";
    document.querySelector("a").innerHTML = "länken ändrad till google.com";
    }

let button3 = document.querySelector('#butt3');

button3.addEventListener("click", calcVol);
    
function calcVol(){
    const bredd = document.getElementById('inputBredd').value;
    const längd = document.getElementById('inputLängd').value;
    const höjd = document.getElementById('inputHöjd').value;
    const result = kub(bredd, längd, höjd);
    document.getElementById('resSpan').textContent = result;
}

function kub(bredd, längd, höjd){
    return bredd*längd*höjd;
}