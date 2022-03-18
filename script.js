let container = document.querySelector("section:first-of-type");
let container2 = document.querySelector("section:nth-of-type(2)");
let container3 = document.querySelector("section:nth-of-type(3)");
let container4 = document.querySelector("section:nth-of-type(4)");
let divQuantity = 3;
let divHeight = 100 / divQuantity;

for(i = 0; i < divQuantity; i++){
    // Stripes
    let rectangle = document.createElement("div");
    let randColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    rectangle.style.height = divHeight + "vh";
    rectangle.style.backgroundColor = randColor;
    container.append(rectangle);

    // Losanges
    let rectangle2 = document.createElement("div");
    rectangle2.style.height = divHeight + "vh";
    rectangle2.style.width = divHeight + "vh";
    rectangle2.style.backgroundColor = randColor;
    rectangle2.style.transform = 'rotate(45deg)';
    container2.append(rectangle2);

    // Left stripes
    let rectangle3 = document.createElement("div");
    rectangle3.style.height = divHeight + "vh";
    rectangle3.style.width = 100 / divHeight + "vw";
    rectangle3.style.backgroundColor = randColor;
    container3.append(rectangle3);

    // Vertical stripes
    let rectangle4 = document.createElement("div");
    rectangle4.style.height = "100vw";
    rectangle4.style.width = divHeight + "vh";
    rectangle4.style.transform = 'rotate(90deg)';
    rectangle4.style.backgroundColor = randColor;
    container4.append(rectangle4);
}