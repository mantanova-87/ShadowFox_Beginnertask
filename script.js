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
            "gap-3"
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