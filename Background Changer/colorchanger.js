const b = document.querySelectorAll(".but");
const body = document.querySelector("body");
const blue = document.querySelector("#blue");
const cyan = document.querySelector("#cyan");
const pink = document.querySelector("#pink");
const violet = document.querySelector("#violet");


console.log(b);

b.forEach((choices) => {
    choices.addEventListener("click" , () => {
        const id = choices.getAttribute("id");
        console.log(id);
        colorChanger(id);
    });
});

const colorChanger = (id) => {
    blue.style.border = "";
    cyan.style.border = "";
    pink.style.border = "";
    violet.style.border = "";
    
    if(id === "blue") {
        body.style.backgroundColor = "blue";
        blue.style.border = "0.2rem solid white";
    }
    else if(id === "cyan") {
        body.style.backgroundColor = "cyan";
        cyan.style.border = "0.2rem solid white";
    }
    else if(id === "pink") {
        body.style.backgroundColor = "pink";
        pink.style.border = "0.2rem solid white";
    }
    else if(id === "violet") {
        body.style.backgroundColor = "blueviolet";
        violet.style.border = "0.2rem solid white";
    }
    else {
        body.style.backgroundColor = "antiquewhite";
    }
}