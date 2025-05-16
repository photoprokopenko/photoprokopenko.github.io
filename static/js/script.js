window.onload = function() {
    let overlay = document.getElementById("overlay");
    let popup = document.getElementById("popup");

    overlay.style.display = "block";
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.opacity = "1";
    }, 100);
};

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
});
