// retrieving the html tags as objects
let span = document.querySelectorAll(".color_front");
let input_color_value = ["blue", "white"];
let body = document.querySelector("body");
let hex1 = document.querySelector("[name=hex1");
let hex2 = document.querySelector("[name=hex2");
// returns a css style with the lineargradient value of the input color
function linearGradient(){
    return `linear-gradient(to right , ${input_color_value[0]}, ${input_color_value[1]})`;
}
function inputBgc(event) {
    let inputColor = this.value;
    if (this.getAttribute("name") === "color1") {
        
        span[0].style.background = inputColor;

        input_color_value[0] = inputColor;
        
        hex1.setAttribute("value", inputColor)
        hex1.style.background = linearGradient()
    } else {
        span[1].style.background = inputColor;
        input_color_value[1] = inputColor;
        hex2.setAttribute("value", inputColor)
        hex2.style.background = linearGradient()
    }
    body.style.background = linearGradient()
}

function spanBgc(x) {
    let input = document.querySelector(`input[name = ${this.getAttribute("name")}`);
    input.addEventListener("input", inputBgc)
    input.click()
}
span[0].addEventListener("click", spanBgc)
span[1].addEventListener("click", spanBgc)
