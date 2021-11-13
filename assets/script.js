const URL_TO_FETCH = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300';

let currentNumber = 0;
const fetchNumber = () => {
  fetch(URL_TO_FETCH)
    .then((response) => response.json())
    .then((data) => (currentNumber = data.value))
    .catch((err) => console.error('Failed retrieving information', err));
};

let display1 = document.getElementById('display-1');
let display2 = document.getElementById('display-2');
let display3 = document.getElementById('display-3');

function setdisplays() {
  let baseClass = 'display-container display-size-12 display-no-';
  let value = document.getElementById('number').value;
  let arr = [...value];

  if (arr.length === 3) {
    display1.className = baseClass + arr[0];
    display2.className = baseClass + arr[1];
    display3.className = baseClass + arr[2];
  }
  if (arr.length === 2) {
    display1.className = baseClass + 0;
    display2.className = baseClass + arr[0];
    display3.className = baseClass + arr[1];
  }
  if (arr.length === 1) {
    display1.className = baseClass + 0;
    display2.className = baseClass + 0;
    display3.className = baseClass + arr[0];
  }
}

function imprimiValor() {
  let value = document.getElementById('number').value;
  console.log(value);
}

function setCurrentNumber() {
  fetchNumber();
}

function imprimiCurrentNumber() {
  console.log(currentNumber);
}

let tip1 = document.getElementById('smaller');
let tip2 = document.getElementById('bigger');
let tip3 = document.getElementById('win');

const setTip = (input, currNumber) => {
  if (input > currNumber) {
    tip1.className = '';
  }
  if (input < currNumber) {
    tip2.className = '';
  }
  tip3.className = '';
};

function numberColorChange(color) {
  var elements = document.getElementsByClassName('segment-border');
  console.log(elements);
  for (var i = 0; i < elements.length; i++) {
    elements[i].className = 'segment-border ' + color;
  }
}
