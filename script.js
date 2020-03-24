// round color picker : 
let span = document.querySelectorAll(".color_front");
let input_color_value = [];
let body = document.querySelector("body");
let hex1 = document.querySelector("input[name=hex1");
let hex2 = document.querySelector("input[name=hex2");
span.forEach((el,index) => {
    
    el.addEventListener("click", function() {
        let name = el.getAttribute("name");
        let input = document.querySelector(`input[name = ${name}]`);
        input.addEventListener("change", function() {
            // input_color_value.unshift(input.value);
            el.style.background = input.value;
            let x = window.getComputedStyle(el);
            let y = window.getComputedStyle(span[1]);
            // console.log(x.backgroundColor)
            // console.log(y.backgroundColor)
            console.log(x.background)
            body.style.background = `linear-gradient(to right , ${x.backgroundColor}, ${y.backgroundColor})`;
            // body.style.background = `linear-gradient(to right, ${x.backgroundColor} , ${y.backgroundColor});`;
            // console.log("body : " +window.getComputedStyle(body).backgroundColor)

        })
        input.click();
    })
})

// let x = window.getComputedStyle(span[0]);
// let y = window.getComputedStyle(span[1])

// body.style.background = `linear-gradient(to right, ${x.backgroundcolor} , ${y.backgroundcolor});`;
// body.style.background = `linear-gradient(to right, ${input_color_value[0]} , ${input_color_value[1]});`
// console.log(window.getComputedStyle(body).getPropertyValue("background"))
// window.getComputedStyle(body).setPropertyValue("background", `linear-gradient(to right, red , blue);`) 

