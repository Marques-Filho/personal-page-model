document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".mobile-menu-icon"),
        t = document.querySelector(".menu");
    e.addEventListener("click", function () {
        t.classList.toggle("mobile-menu-open");
    });
});
const prevButton = document.querySelector(".prev-depositions"),
    nextButton = document.querySelector(".next-depositions"),
    cards = document.querySelectorAll(".container-depositions > div");
let currentIndex = 0;
function showCards() {
    cards.forEach((e, t) => {
        t >= currentIndex && t < currentIndex + getVisibleCardCount() ? (e.style.display = "block") : (e.style.display = "none");
    });
    let e = 0 === currentIndex;
    e ? prevButton.classList.add("disabled") : prevButton.classList.remove("disabled");
    let t = currentIndex + getVisibleCardCount() >= cards.length;
    t ? nextButton.classList.add("disabled") : nextButton.classList.remove("disabled");
}
function getVisibleCardCount() {
    return window.innerWidth <= 1200 ? 1 : 3;
}
function prevCard() {
    currentIndex > 0 && (currentIndex -= 1), showCards();
}
function nextCard() {
    currentIndex + getVisibleCardCount() < cards.length && (currentIndex += 1), showCards();
}
function scrollToSection(e) {
    let t = document.querySelector(e);
    if (t) {
        let n = 0;
        (n = "#projects" === e ? t.offsetTop - 70 : t.offset - (window.innerHeight - t.clientHeight) / 2), window.scrollTo({ top: n, behavior: "smooth" });
    }
}
prevButton.addEventListener("click", prevCard),
    nextButton.addEventListener("click", nextCard),
    showCards(),
    window.addEventListener("resize", showCards),
    document.addEventListener("DOMContentLoaded", function () {
        let e = document.querySelector("form"),
            t = document.getElementById("success-message"),
            n = document.getElementById("error-message"),
            o = document.getElementById("loading");
        e.addEventListener("submit", function (r) {
            r.preventDefault();
            let s = document.getElementById("nome").value,
                l = document.getElementById("email").value,
                d = document.getElementById("assunto").value,
                i = document.getElementById("mensagem").value;
            (e.style.display = "none"), (t.style.display = "none"), (n.style.display = "none"), (o.style.display = "block");
            let a = { to: "codestart@gmail.com", from: "codestart@hotmail.com", subject: "Contato do site", text: "Contato do site", html: `<p>Nome: ${s}</p<br/><p>Email: ${l}</p<br/><p>Assunto: ${d}</p<br/><p>Mensagem: ${i}</p<br/>` };
            fetch("https://jnekrnrkrk", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(a) })
                .then((e) => {
                    e.ok ? ((o.style.display = "none"), (t.style.display = "block")) : ((o.style.display = "none"), (n.style.display = "block"), console.error(`Erro na resposta da api: ${e.status} ${e.statusText}`));
                })
                .cath((e) => {
                    console.error(e), (o.style.display = "none"), (n.style.display = "block");
                });
        });
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let e = document.querySelector("nav a");
        e.forEach(function (e) {
            e.addEventListener("click", function (t) {
                t.preventDefault();
                let n = e.getAttribute("href");
                scrollToSection(n);
            });
        });
        let t = document.querySelector("footer a");
        t.forEach(function (e) {
            e.addEventListener("click", function (t) {
                t.preventDefault();
                let n = e.getAttribute("href");
                scrollToSection(n);
            });
        });
    });
