let showColor = document.querySelector("#showColor");
let colorBtn = document.querySelector("#colorBtn");
let historyContainer = document.querySelector(".historyContainer")

function generateHexColor(){
    // access all digits of hex code
    const hex = "0123456789ABCDEF";
    let color = "#";
    // code runs untill it generate 6 digit 
    for (let idx = 0; idx < 6 ; idx++) {
        let randomIndex = Math.floor(Math.random() *16);
        // adding # before 6 digit for hex color
        color += hex[randomIndex];
    }
    return color ; // return the color value back to the function , this is the last output of this function
}

colorBtn.addEventListener("click" ,()=>{
    let randomColor = generateHexColor()

    document.body.style.backgroundColor = randomColor;
    showColor.textContent = `Your background color is :${randomColor}`
    //display history container back when 1st color generated
    historyContainer.style.display = "block";
    // make a new div to stores new colors in the history container
    let historyColor = document.createElement("div");
    historyColor.textContent = randomColor ;
    historyColor.classList.add("historyCircle");
    historyColor.style.backgroundColor = historyColor.textContent;
    historyContainer.prepend(historyColor);

    // adding only 5 last colors to the container to not make it messy
    if(historyContainer.children.length > 5){
        historyContainer.lastElementChild.remove()
    }
})

document.addEventListener("keydown" , (event)=>{
    if (event.code === "Space") {
        event.preventDefault();
        colorBtn.click()
    }  
})