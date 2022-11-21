let who = ["The dog", "My grandma", "My turtle", "A bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car", "the swimming pool"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

let whereTheResultGoes;
whereTheResultGoes = document.getElementById("excuse");

function excuseGenerator() {
  function select() {
    let i = Math.floor(Math.random() * 4);
    return i;
  }
  whereTheResultGoes.innerText = `${who[select()]} ${action[select()]} ${
    what[select()]
  } ${when[select()]}!!! 😭 😭 😭`;
}
