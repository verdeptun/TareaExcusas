/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let aleatorio = Math.floor(Math.random() * 4);
  let actionAleatorio = Math.floor(Math.random() * 4);
  let whatAleatorio = Math.floor(Math.random() * 3);
  let whenAleatorio = Math.floor(Math.random() * 5);

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excusa =
    who[aleatorio] +
    " " +
    action[actionAleatorio] +
    " " +
    what[whatAleatorio] +
    " " +
    when[whenAleatorio];
  console.log(excusa);

  document.getElementById("excuse").innerHTML = excusa;
};
