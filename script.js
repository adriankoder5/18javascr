console.log('Hello :3');

const inputData = document.querySelector('#inpD');
const send = document.querySelector('#sendD');
const parent = document.querySelector('#container');
console.log(inputData,'--',send);

function displayData() {
    console.log('funct runn');
    let valueData = document.querySelector('#inpD').value;
    console.log(valueData)// viser data fra inputtfeltet i console
    let newInput = document.createElement('li');//ny liste item
    if (valueData === ''){console.log('write something')}
    else{newInput.textContent = valueData;//lag liste inhold fra input text
         parent.appendChild(newInput);}
}

send.addEventListener('click', displayData);//button for running displaydata funct

inputData.addEventListener('keydown', function (event) { //enter for running displaydata funct
  if (event.key === 'Enter') {
    console.log('enterpressed');
    displayData();
  }
});
