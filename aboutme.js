function typeWriter(elementId, speed) {
    const element = document.getElementById(elementId);

    const text = element.textContent;
    element.textContent = "";

    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}
typeWriter("navTitle",100);
typeWriter("intro",20);
typeWriter("intro1",75);


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
    }, (index+2) * 1000);
});