console.log('Hello :3');

const inputData = document.querySelector('#inpD');
const send = document.querySelector('#sendD');
console.log(inputData,'--',send);

function displayData() {// viser data fra inputtfeltet i console
    console.log('funct runn');
    let valueData = document.querySelector('#inpD').value;
    console.log(valueData)
}

send.addEventListener('click', displayData);//button for running displaydata funct

inputData.addEventListener('keydown', function (event) { //enter for running displaydata funct
  if (event.key === 'Enter') {
    console.log('enterpressed');
    displayData();
  }
});