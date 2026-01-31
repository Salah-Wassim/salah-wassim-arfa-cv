const schools = ["Epitech", "La Poste"];
let index = 0;

const el = document.querySelector(".school-anim");

setInterval(() => {
    index = (index + 1) % schools.length;

    const span = document.createElement("span");
    span.textContent = schools[index];

    el.innerHTML = "";
    el.appendChild(span);
}, 2500);
