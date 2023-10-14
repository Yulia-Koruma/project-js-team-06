function toggleTheme() {
    const slider = document.getElementById("slider");
    const knob = document.querySelector(".switch-svg-knob");

    if (slider.checked) {
        knob.style.transform = "translateX(20px)";
    } else {
        knob.style.transform = "translateX(0)";
    }
}