let lives;
let word;
let guessed;
let wrongLetters;

const gameOn = () => {
  lives = 5;
  document.getElementById("lives").innerHTML = "Vidas: " + lives;
  word = generateRandomWord();
  guessed = word
    .split("")
    .map((char) => (char == " " ? " " : "_"))
    .join("");
  document.getElementById("word").innerHTML = guessed;
  wrongLetters = document.getElementById("wrong-letters");
  document.getElementById("game-container").style.display = "block";
};

const gameOver = () => {
  const el = document.getElementById("final-message");
  lives === 0
    ? (el.innerHTML =
        'Perdeste! Carrega no botão "Novo jogo" para tentar outra vez')
    : (el.innerHTML =
        'Ganhaste! Parabéns!!! Carrega no botão "Novo jogo" para jogar outra vez');
};

const generateRandomWord = () => {
  const words = [
    "casa",
    "carro",
    "mesa",
    "computador",
    "telefone",
    "janela",
    "parede",
    "relogio",
    "cadeira",
    "banana",
    "chave",
    "porta",
    "livro",
    "caneta",
    "caderno",
    "mochila",
    "escola",
    "trabalho",
    "cidade",
    "praia",
    "montanha",
    "rio",
    "floresta",
    "animais",
    "pessoa",
    "crianca",
    "adulto",
    "familia",
    "comida",
    "bebida",
    "sol",
    "lua",
    "estrela",
    "vento",
    "chuva",
    "tempestade",
    "ceu",
    "terra",
    "fogo",
    "agua",
    "musica",
    "danca",
    "arte",
    "teatro",
    "desporto",
    "futebol",
    "basquetebol",
    "corrida",
    "viagem",
    "historia",
  ];
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
};

const decrementLives = () => {
  lives--;
  document.getElementById("lives").innerHTML = "Vidas: " + lives;
};

const guessLetter = (letter) => {
  const wordArray = word.split("");
  if (wordArray.indexOf(letter) != -1) {
    console.log("Letra encontrada: " + letter);
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] == letter) {
        guessed = guessed.substring(0, i) + letter + guessed.substring(i + 1);
      }
    }
  } else {
    decrementLives();
    wrongLetters.innerHTML += "<li>" + letter + "</li>";
  }
  lives == 0 || guessed == word ? gameOver() : null;
  document.getElementById("word").innerHTML = guessed;
  document.getElementById(letter).disabled = true;
};
