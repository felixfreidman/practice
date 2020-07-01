let elems = document.querySelectorAll(".bad");
let sum = 0;
for (var i = 0; i < elems.length; i++) {
    let str = elems[i].innerHTML;
    str = str.replace("%", "");
    console.log(+str);
    if (+str > 61) {
        elems[i].classList.toggle("good");
        elems[i].classList.toggle("bad");
    }
    sum += +str;
}
if ((sum / elems.length) > 61) {
    document.querySelector(".total_res").innerText = "Зачет";
    document.querySelector(".total_res").style.background = "rgba(0, 153, 51,0.6)";
} else {
    document.querySelector(".total_res").innerText = "Незачет";
    document.querySelector(".total_res").style.background = "rgba(230, 50, 0, 0.8)";
}