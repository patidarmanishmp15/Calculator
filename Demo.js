let Btns = document.querySelectorAll(".btn");
let Answer = document.getElementById("Answer");
let HistoryText = document.getElementById("History");

for (let i of Btns) {
  i.addEventListener("click", (e) => {
    let BtnText = e.target.innerText;

    console.log(BtnText);

    if (BtnText == "C") {
      HistoryText.innerText = "";
      Answer.innerText = "";
    } else if (BtnText == "=") {
      HistoryText.innerText = Answer.innerText;
      Answer.innerText = eval(Answer.innerText);
    } else {
      Answer.innerText += BtnText;
    }
  });
}
