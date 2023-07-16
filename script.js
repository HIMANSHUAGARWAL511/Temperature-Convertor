const f = document.getElementById('f')
const R = document.getElementById('R')
const c = document.getElementById('c')
const k = document.getElementById('k')
const ConvertF = () => {
    c.value = ((f.value - 32) * (5 / 9)).toFixed(2);
    k.value = ((f.value + 459.67) * (5 / 9)).toFixed(2);
    R.value = ((f.value + 459.67) * (1)).toFixed(2)

}
const ConvertR = () => {
    c.value = ((R.value * (5 / 9)) - 273.15).toFixed(2);
    f.value = ((R.value - 459.67).toFixed(2));
    k.value = ((R.value * (5 / 9)).toFixed(2))
}
const ConvertC = () => {
    f.value = ((c.value * (9 / 5)) + 32).toFixed(2);
    k.value = ((c.value + 273.15) * (1)).toFixed(2);
    R.value = ((c.value * (9 / 5)) + 491.67).toFixed(2)
}
const ConvertK = () => {
    c.value = ((k.value - 273.15).toFixed(2));
    f.value = ((k.value * (9 / 5)) - 459.67).toFixed(2)
    R.value = ((k.value * (9 / 5)).toFixed(2))
}


R.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        ConvertR();
    }
})
f.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        ConvertF();
    }
})
c.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        ConvertC();
    }
})
k.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        ConvertK();
    }
})
window.onload(c.value = "", R.value = "", k.value = "", f.value = "")