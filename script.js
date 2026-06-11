const pfp=document.getElementById("pfp")
const deskImage = document.getElementById("deskImage");
const pfp1=document.getElementById("pfp1")
// Initial zoomed state
deskImage.style.transform = "scale(2)";
deskImage.style.transition = "transform 3s ease-out";

// Start animation after page loads
window.addEventListener("load", () => {
    setTimeout(() => {
        deskImage.style.transform = "scale(1)";
    }, 100);
});
deskImage.addEventListener("transitionend", () => {
    pfp1.classList.add("show");
    pfp.classList.add("show");
});
pfp.addEventListener("click", () => {
    pfp1.classList.add("scale-125");

    setTimeout(()=>{window.location.href="about.html";},500);
});