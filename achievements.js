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