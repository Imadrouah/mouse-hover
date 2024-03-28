let div = document.querySelector(".cur");
let span = document.querySelector("span");
document.addEventListener("mousemove", (e) => {
    div.style.backgroundColor = "white";
    div.style.boxShadow = "rgba(51, 51, 51, 0.5) 0px 0px 15px 30px inset";
    div.style.left = e.pageX - 45 + "px";
    div.style.top = e.pageY - 50 + "px";
    localStorage.setItem("x", e.pageX - 45);
    localStorage.setItem("y", e.pageY - 50);
});
span.addEventListener("mouseover", () => {
    div.style.transform = "scale(2)";
});
span.addEventListener("mouseleave", () => {
    div.style.transform = "scale(1)";
});
document.addEventListener("mouseleave", () => {
    div.style.backgroundColor = "transparent";
    div.style.boxShadow = "none";
});
window.addEventListener("storage", () => {
    div.style.left = localStorage.getItem("x") + "px";
    div.style.top = localStorage.getItem("y") + "px";
});
