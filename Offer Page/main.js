const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");

const texts = [
    "Emin misin?",
    "Son kararın mı?",
    "Bir daha düşün",
    "Cidden mi?",
    "Kaçma"
];

let count = 0;
let yesSize = 16;

noBtn.addEventListener("click", () => {
    count++;

    question.textContent = texts[count % texts.length];

    const x = Math.random() * (window.innerWidth - 90);
    const y = Math.random() * (window.innerHeight - 45);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    yesSize += 30;
    yesBtn.style.fontSize = yesSize + "px";

    if (count > 6) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
      <h1 style="color:white;font-family:Arial;text-align:center;">
        🎉 Zaten başka ihtimal yoktu. 🎉
      </h1>
    `;
});