const URL_TO_FETCH = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300';

// Cria um novo número
let currentNumber = 0;
const fetchNumber = () => {
  fetch(URL_TO_FETCH)
    .then((response) => response.json())
    .then((data) => (currentNumber = data.value))
    .catch((err) => console.error('Failed retrieving information', err));
};

// Status de erro da requisição
const handleResponseError = () => {
  let baseClass = 'display-container display-size-12 display-no-';
  display1.className = baseClass + '5';
  display2.className = baseClass + '0';
  display3.className = baseClass + '2';
  tip4.className = '';
};

// Monta o Display
let display1 = document.getElementById('display-1');
let display2 = document.getElementById('display-2');
let display3 = document.getElementById('display-3');

let currentValue = 0;
function setdisplays() {
  let baseClass = 'display-container display-size-12 display-no-';
  currentValue = document.getElementById('number').value;
  let arr = [...currentValue];

  if (arr.length === 3) {
    display1.className = baseClass + arr[0];
    display2.className = baseClass + arr[1];
    display3.className = baseClass + arr[2];
  }
  if (arr.length === 2) {
    display1.className = baseClass + ' win';
    display2.className = baseClass + arr[0];
    display3.className = baseClass + arr[1];
  }
  if (arr.length === 1) {
    display1.className = baseClass + ' win';
    display2.className = baseClass + ' win';
    display3.className = baseClass + arr[0];
  }
}

// Apaga o btn de New game.
let newGameBtn = document.getElementById('new-game');
const checkCurrentNumber = () => {
  setTimeout(() => {
    if (currentNumber !== 0 && currentNumber != currentValue && currentNumber != undefined) {
      return (newGameBtn.className = 'new-game');
    }
    return (newGameBtn.className = 'new-game-active');
  }, 500);
};

// Começa novo jogo, apaga btn de new game, apaga aviso para iniciar um novo jogo se ele estive em tela
function setCurrentNumber() {
  fetchNumber(); // Cria um novo jogo,
  checkCurrentNumber(); // Apaga btn de novo jogo
  if (currentNumber === 0 && currentNumber === currentValue) {
    //remove span de novo jogo.
    return (spanNewGame.className = 'span-new-game'); // se ele existir
  }
}

// Monta a dica para acertar o chute, apaga o erro caso ele esteja na tela
let tip1 = document.getElementById('smaller');
let tip2 = document.getElementById('bigger');
let tip3 = document.getElementById('win');
let tip4 = document.getElementById('error');

const setTip = (input, currNumber) => {
  if (input > currNumber) {
    return (
      (tip1.className = ''),
      (tip2.className = 'bigger'),
      (tip3.className = 'win'),
      (tip4.className = 'error')
    );
  }
  if (input < currNumber) {
    return (
      (tip1.className = 'smaller'),
      (tip2.className = ''),
      (tip3.className = 'win'),
      (tip4.className = 'error')
    );
  }
  if (input == currNumber) {
    return (
      (tip1.className = 'smaller'),
      (tip2.className = 'bigger'),
      (tip3.className = ''),
      (tip4.className = 'error')
    );
  }
};

// Criei um span pra avisar que o display nao vai funcionar sem um jogo em rota
let spanNewGame = document.getElementById('span');

const handleClickSend = () => {
  if (currentNumber === 0 && currentNumber === currentValue) {
    return (spanNewGame.className = '');
  }
  setdisplays();
  setTip(currentValue, currentNumber);
  checkCurrentNumber(); // se por um acaso, o btn ainda estiver ativo ele apaga assim que eu testar um número
};

// muda a cor do display
function numberColorChange(color) {
  var elements = document.getElementsByClassName('segment-border');
  console.log(elements);
  for (var i = 0; i < elements.length; i++) {
    elements[i].className = 'segment-border ' + color;
  }
}
