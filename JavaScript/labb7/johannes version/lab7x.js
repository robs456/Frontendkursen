const main = document.getElementById("main");
const buttonContinue = document.getElementById("continue");

buttonContinue.addEventListener("click", cont);

let counter = 0;
function cont() {
  switch (counter++) {
    case 0:
      addTask1();
      buttonContinue.innerHTML = "Update <strong>text</strong>";
      break;
    case 1:
      changeText();
      buttonContinue.innerHTML = "Continue";
      break;
    case 2:
      addTask2();
      break;
    case 3:
      changeLink();
      buttonContinue.innerHTML = "Update <strong>link</strong>";
      break;
    case 4:
      addTask3();
      buttonContinue.innerHTML = "Continue";
      break;
    default:
      calcVol();
      buttonContinue.innerHTML = "Beräkna volymen";
      break;
  }
}

function addTask1() {
  main.innerHTML = "";

  const p = document.createElement("p");
  p.className = "text-center mt-5";
  p.textContent = "Denna paragraf är gammal och måste uppdateras.";
  main.appendChild(p);
}

function changeText() {
  const p = main.querySelector("p");
  p.textContent = "Denna paragraf är ny och fräsch.";
}

function addTask2() {
  main.innerHTML = "";

  const p = document.createElement("p");
  p.className = "text-center mt-5";
  p.innerHTML =
    '<strong>Uppgift två</strong>: <a href="https://example.com">länk till example.com</a>';
  p.setAttribute("id", "para2");
  main.appendChild(p);
}

function changeLink() {
  const p = main.querySelector("p");
  p.innerHTML =
    '<strong>Uppgift två</strong>: <a href="https://google.com">länken ändrad till google.com</a>';
}

function addTask3() {
  main.innerHTML = "";

  const t3inst = document.createElement("p");
  t3inst.className = "text-center mt-5";
  t3inst.innerHTML = "Ange mått i formuläret och tryck 'Beräkna volym'!";
  t3inst.setAttribute("id", "inst");
  main.appendChild(t3inst);

  const divB = document.createElement("div");
  divB.className = "input-group m-3";
  main.appendChild(divB);

  const inputB = document.createElement("span");
  inputB.classList.add("input-group-text");
  inputB.textContent = "Bredd";
  divB.appendChild(inputB);

  const formB = document.createElement("input");
  formB.classList.add("form-control");
  formB.setAttribute("id", "inputBredd");
  formB.setAttribute("type", "text");
  formB.setAttribute("placeholder", "Bredd");
  divB.appendChild(formB);

  const divL = document.createElement("div");
  divL.className = "input-group m-3";
  main.appendChild(divL);

  const inputL = document.createElement("span");
  inputL.classList.add("input-group-text");
  inputL.textContent = "Längd";
  divL.appendChild(inputL);

  const formL = document.createElement("input");
  formL.classList.add("form-control");
  formL.setAttribute("id", "inputLängd");
  formL.setAttribute("type", "text");
  formL.setAttribute("placeholder", "Längd");
  divL.appendChild(formL);

  const divH = document.createElement("div");
  divH.className = "input-group m-3";
  main.appendChild(divH);

  const inputH = document.createElement("span");
  inputH.classList.add("input-group-text");
  inputH.textContent = "Bredd";
  divH.appendChild(inputH);

  const formH = document.createElement("input");
  formH.classList.add("form-control");
  formH.setAttribute("id", "inputHöjd");
  formH.setAttribute("type", "text");
  formH.setAttribute("placeholder", "Höjd");
  divH.appendChild(formH);

  const t3text = document.createElement("p");
  t3text.className = "text-center mt-5 fs-2";
  t3text.setAttribute("id", "t3text");
  t3text.innerHTML = 'Volymen är: <strong><span id="resSpan"></span></strong>';
  main.appendChild(t3text);
}

function calcVol() {
  const bredd = document.getElementById("inputBredd").value;
  const längd = document.getElementById("inputLängd").value;
  const höjd = document.getElementById("inputHöjd").value;
  const result = kub(bredd, längd, höjd);
  document.getElementById("resSpan").textContent = result;
}

function kub(bredd, längd, höjd) {
  return bredd * längd * höjd;
}
