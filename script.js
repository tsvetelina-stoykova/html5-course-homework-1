'use strict;'

var movies = [
  {
    title: "Изкуплението Шоушенк",
    actors: ["Морган Фрийман", "ТИм Робинс"]
  },
  {
    title: "Кръстникът",
    actors: ["Марлон Брандо", "Ал Пачино", "Робърт Дювал"]
  },
  {
    title: "Криминале",
    actors: ["Джон Траволта", "Самюел Л. Джаксон", "Брус Уилис"]
  },
  {
    title: "Списъка на Шиндлер",
    actors: ["Лиам Нийсън", "Бен Кингсли"]
  },
  {
    title: "Боен Клуб",
    actors: ["Едуард Нортън", "Брад Пит", "Хелена Бонъм Картър"]
  },
  {
    title: "Форест Гъмп",
    actors: ["Том Ханкс", "Ребека Уилямс"],
  },
  {
    title: "Матрицата",
    actors: ["Киану Рийвс", "Лоранс Фишбърн", "Кари-Ан Мос"],
  }, 
  {
    title:"Игра на кодове",
    actors:["Бенедикт Къмбъбач","Кийра Найтли","Чарлс Денс"]
  }
];

var currentMovie;

function getRandomMovie(){
  var num = (Math.floor(Math.random() * 1000))%movies.length;
  return movies[num];
};

function getObfuscatedTitle(movie){
  
  //TODO: Скрий буквите
  
  return movie.title;
};

function checkAnswer(answer){
  return currentMovie.title.toUpperCase() === answer.toUpperCase();
};


window.onload = function(){
  currentMovie = getRandomMovie();
  var display = document.getElementById("display");
  var titlePragraph = document.createElement("p");
  titlePragraph.innerHTML = getObfuscatedTitle(currentMovie);
  display.appendChild(titlePragraph);
  for(var nIter = 0; nIter < currentMovie.actors.length; nIter++){
    var actorPragraph = document.createElement("p");
    actorPragraph.innerHTML = currentMovie.actors[nIter];
    display.appendChild(actorPragraph);
  };
  
};

var form = document.getElementById("form");
form.addEventListener("submit",function(){
  
  //TODO: check if answer is corect
});




