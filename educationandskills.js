function typeWriter(elementId, speed) {
    const element = document.getElementById(elementId);

    const text = element.textContent;
    element.textContent ="";

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
typeWriter("navTitle",50);
typeWriter("intro",50);
typeWriter("c6",100);

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
    document.getElementById("intro"),
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3"),
    document.getElementById("c4"),
    document.getElementById("c5"),
    document.getElementById("c6"),
    document.getElementById("c7"),
    document.getElementById("c8"),
    document.getElementById("c9"),
    document.getElementById("c10"),
    document.getElementById("c11"),
    document.getElementById("c12"),
    document.getElementById("c13"),
    document.getElementById("c14"),
    document.getElementById("c15"),
    document.getElementById("c16")
];

cards.forEach((card, index) => {
    setTimeout(() => {
        card.classList.remove("opacity-0");
    }, (index+2) * 1000);
});