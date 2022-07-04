const mContainer = document.querySelector(".main-container");
const reiniciar = document.querySelector(".nav");

for(let i=0;i<100;i++){
    let board = document.createElement("div");
    board.classList.add("cDivs");
    mContainer.appendChild(board)    
}

mContainer.childNodes.forEach( e =>{
    e.addEventListener("mouseover", k =>{
        k.target.classList.add("cDivsH")
    })
})


reiniciar.addEventListener("click", e=>{
    mContainer.childNodes.forEach(k =>{
        k.classList = "cDivs"
    })
        
})



