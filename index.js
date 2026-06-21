const navTitle = document.getElementById("navTitle");
const text = "Cybersecurity Enthusiast | Developer | Problem Solver ";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        navTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 30);
    }
}
typeWriter();
const heroPfp = document.getElementById("heroPfp");
let enlarged = false;
heroPfp.style.transition = "all 0.4s ease";
heroPfp.addEventListener("click", () => {
    enlarged = !enlarged;
    if (enlarged) {
        heroPfp.style.transform = "scale(1.4)";
        heroPfp.style.zIndex = "999";
        heroPfp.style.position = "relative";
    } else {
        heroPfp.style.transform = "scale(1)";
        heroPfp.style.zIndex = "";
        heroPfp.style.position = "";
    }
});
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    if (navLinks.classList.contains("hidden")) {

        navLinks.classList.remove("hidden");

        navLinks.classList.add(
            "flex",
            "flex-col",
            "absolute",
            "top-20",
            "left-0",
            "w-full",
            "bg-black/90",
            "backdrop-blur-md",
            "p-4",
            "gap-3",
            "z-[1000]"
        );

    } else {

        navLinks.classList.add("hidden");

        navLinks.classList.remove(
            "flex",
            "flex-col",
            "absolute",
            "top-20",
            "left-0",
            "w-full",
            "bg-black/90",
            "backdrop-blur-md",
            "p-4",
            "gap-3"
        );
    }

});

const pages = {
    abt: "aboutme.html",
    edus: "educationandskills.html",
    pra: "projectsandachievements.html",
    };

for (const id in pages) {
    document.getElementById(id).addEventListener("click", () => {
        window.location.href = pages[id];
    });
}

function addTilt(card) {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 20;
        const rotateX = -(y / rect.height - 0.5) * 20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    });

}
addTilt(document.getElementById("card1"));
addTilt(document.getElementById("card2"));
addTilt(document.getElementById("card3"));

const cards = {
    card1: "aboutme.html",
    card2: "educationandskills.html",
    card3: "projectsandachievements.html",
};

for (const id in cards) {
    document.getElementById(id).addEventListener("click", () => {
        window.location.href = cards[id];
    });
}

const elements = document.querySelectorAll(".typewriter");

elements.forEach((element, index) => {
    const text = element.textContent;
    element.textContent = "";

    setTimeout(() => {
        let i = 0;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 30);
            }
        }

        type();
    }, index * 1500);
});
const cards1 = [
    document.getElementById("sec"),
    document.getElementById("pic"),
    document.getElementById("text"),
    document.getElementById("section"),
    document.getElementById("cards"),
    document.getElementById("card1"),
    document.getElementById("card2"),
    document.getElementById("card3")
];

cards1.forEach((card, index) => {
    setTimeout(() => {
        card.classList.remove("opacity-0");
    }, (index+2) * 1000);
});