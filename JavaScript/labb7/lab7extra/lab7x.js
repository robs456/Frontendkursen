let button1 = document.getElementById('butt1');

button1.addEventListener("click", addTask1);

function addTask1(){

    let remButton = document.getElementById("butt1");
    remButton.parentNode.removeChild(remButton);

    let t1text = document.createElement('p');
    t1text.className = 'text-center mt-5';
    t1text.textContent = 'Denna paragraf är gammal och måste uppdateras.';
    t1text.setAttribute('id', 'para');
    
    let main = document.getElementById('main');  
    main.appendChild(t1text);

    let button2 = document.createElement('button');
    button2.className = 'btn btn-primary mb-3';
    button2.setAttribute('id', 'butt2');
    button2.setAttribute('type', 'button');
    button2.innerHTML ='Update <strong>text</strong>';

    main.appendChild(button2);

    button2.addEventListener('click', changeText);
    
}

function changeText(){

    let para1 = document.querySelector('#para');
    para1.textContent = "Denna paragraf är ny och fräsch.";
    
    let button3 = document.createElement('button');
    button3.className = 'btn btn-primary ms-3';
    button3.setAttribute('id', 'butt3');
    button3.setAttribute('type', 'button');
    button3.innerHTML ='Continue';
    main.appendChild(button3);
    main.removeChild(document.getElementById('butt2'));

    button3.addEventListener("click", addTask2);
}


function addTask2(){

    let remButton = document.getElementById("butt3");
    remButton.parentNode.removeChild(remButton);
    let main = document.getElementById('main'); 
    main.removeChild(document.getElementById('para'));

    let t2text = document.createElement('p');
    t2text.className = 'text-center mt-5';
    t2text.innerHTML = '<strong>Uppgift två</strong>: <a href="https://example.com">länk till example.com</a>';
    t2text.setAttribute('id', 'para2');
    
   

    main.appendChild(t2text);

    let button4 = document.createElement('button');
    button4.className = 'btn btn-primary mb-3';
    button4.setAttribute('id', 'butt4');
    button4.setAttribute('type', 'button');
    button4.innerHTML ='Update <strong>link</strong>';

    main.appendChild(button4);

    button4.addEventListener('click', changeLink);

}

function changeLink(){
    document.querySelector("a").href = "https://google.com";
    document.querySelector("a").innerHTML = "länken ändrad till google.com";

    let button5 = document.createElement('button');
    button5.className = 'btn btn-primary ms-5';
    button5.setAttribute('id', 'butt5');
    button5.setAttribute('type', 'button');
    button5.innerHTML ='Continue';
    main.appendChild(button5);
    main.removeChild(document.getElementById('butt4'));

    button5.addEventListener("click", addTask3);

}

function addTask3(){

    main.removeChild(document.getElementById('butt5'));
    main.removeChild(document.getElementById('para2'));

    let t3inst = document.createElement('p');
    t3inst.className = 'text-center mt-5';
    t3inst.innerHTML = 'Ange mått i formuläret och tryck \'Beräkna volym\'!';
    t3inst.setAttribute('id', 'inst');
    main.appendChild(t3inst);

    let divB = document.createElement('div');
    divB.className = 'input-group m-3';
    main.appendChild(divB);

    let inputB = document.createElement('span');
    inputB.classList.add('input-group-text');
    inputB.textContent ='Bredd';
    divB.appendChild(inputB);

    let formB = document.createElement('input');
    formB.classList.add('form-control');
    formB.setAttribute('id', 'inputBredd');
    formB.setAttribute('type', 'text');
    formB.setAttribute('placeholder', 'Bredd');
    divB.appendChild(formB);

    let divL = document.createElement('div');
    divL.className = 'input-group m-3';
    main.appendChild(divL);

    let inputL = document.createElement('span');
    inputL.classList.add('input-group-text');
    inputL.textContent ='Längd';
    divL.appendChild(inputL);

    let formL = document.createElement('input');
    formL.classList.add('form-control');
    formL.setAttribute('id', 'inputLängd');
    formL.setAttribute('type', 'text');
    formL.setAttribute('placeholder', 'Längd');
    divL.appendChild(formL);

    let divH = document.createElement('div');
    divH.className = 'input-group m-3';
    main.appendChild(divH);

    let inputH = document.createElement('span');
    inputH.classList.add('input-group-text');
    inputH.textContent ='Bredd';
    divH.appendChild(inputH);

    let formH = document.createElement('input');
    formH.classList.add('form-control');
    formH.setAttribute('id', 'inputHöjd');
    formH.setAttribute('type', 'text');
    formH.setAttribute('placeholder', 'Höjd');
    divH.appendChild(formH);

    let button6 = document.createElement('button');
    button6.className = 'btn btn-primary ms-5';
    button6.setAttribute('id', 'butt6');
    button6.setAttribute('type', 'button');
    button6.innerHTML ='Beräkna volymen';
    main.appendChild(button6);
    
    let t3text = document.createElement('p');
    t3text.className = 'text-center mt-5 fs-2';
    t3text.setAttribute('id', 't3text')
    t3text.innerHTML = 'Volymen är: <strong><span id="resSpan"></span></strong>';
    main.appendChild(t3text);

    button6.addEventListener("click", calcVol);
    

}

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