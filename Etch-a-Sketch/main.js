const mContainer = document.querySelector(".main-container");
const reiniciar = document.querySelector(".reset");
const select = document.querySelector(".select");
let numeroColumns = 4096;

// funtion that executes the default grid and the primary functions of the etch-a-sketch
const grilla = () => {

    // setting the large of the div, by default its setted to 4096 (64x64), and in the .main-container css class the grid column template is setted to 64. 
    for(let i=0;i<numeroColumns;i++){
        let board = document.createElement("div");
        board.classList.add("cDivs");
        mContainer.appendChild(board)    
    }

    // adding a cDivsH class to the divs that the mouse is over. this is like painting the divs.
    mContainer.childNodes.forEach( e =>{
        e.addEventListener("mouseover", k =>{
            k.target.classList.add("cDivsH")
        })
    })
    
    // return all divs to blank, removing cDivsH
    reiniciar.addEventListener("click", e=>{
        mContainer.childNodes.forEach(k =>{
            k.classList = "cDivs"
        })
            
    })
}

grilla(); // initialize the grilla function

// function that removes all the children nodes of the parent
const removeAllChildren = ()=>{
    while (mContainer.firstChild) {
        mContainer.removeChild(mContainer.firstChild);
    }
}

// function that resets the grid display and large, changing the numeroColumns and the grid template columns in the css class
const gridColumns = e => {
    removeAllChildren();
    numeroColumns = +prompt("Ingrese el largo de la grilla");
    mContainer.style.gridTemplateColumns = `repeat(${numeroColumns}, 1fr)`;
    numeroColumns = numeroColumns * numeroColumns;
    grilla();   
}

// executes gridColumns funtion when clicking the select button
select.addEventListener("click", gridColumns);









