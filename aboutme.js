const navTitle = document.getElementById("navTitle");
const text = "Cybersecurity Enthusiast | Developer | Problem Solver ";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        navTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
const heroPfp = document.getElementById("pfp1");
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
typeWriter();
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
    about: "aboutme.html",
    edu: "education.html",
    con: "contactme.html",
    skl: "skillsandprojects.html",
    ach: "achievements.html"
};

for (const id in pages) {
    document.getElementById(id).addEventListener("click", () => {
        window.location.href = pages[id];
    });
}
const cards = [
    document.getElementById("pfp1"),
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3"),
    document.getElementById("c4")
];

cards.forEach((card, index) => {
    setTimeout(() => {
        card.classList.remove("opacity-0");
    }, (index+1) * 1000);
});