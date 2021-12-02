//setting the grid//
//

let gridContainer = document.getElementById('grid-container');
var pixel = 0

let controlPanel = document.getElementById('control-panel');
controlPanel.addEventListener('submit', makePixels);

let colorR = 0;
let colorG = 0;
let colorB = 0;

//filling the grid
function makePixels(e){
    e.preventDefault()

    //clear grid before creating grid
    document.querySelectorAll('.pixel').forEach(e => e.remove());
    
    //Get number of pixels from text box
    var gridWidth = document.getElementById('grid-width').value;

    //Make pixels based on gridWidth
    pixels=Math.pow(gridWidth,2);
    let colorCounter  = pixels-1;
    console.log(pixels);
    console.log(colorCounter);

    //Set grid width
    gridContainer.style.gridTemplateColumns = `repeat(${gridWidth},auto)`;

    for (i=pixels; i>0; i--){
    pixel = document.createElement('div');
    pixel.className = "pixel"
    //pixel.textContent = `${i}-${colorCounter}`;

    colorCounter++;
    //if gridWidth is even, add extra to colorCounter every row
        if(i%gridWidth==0&& gridWidth% 2 === 0){
        colorCounter++;
    }
    //if colorCounter is odd, background is grey
    if(colorCounter% 2 === 1){
        pixel.style.backgroundColor = "rgb(222,222,222)";
    }
    gridContainer.appendChild(pixel);
    }
    // Coloring mouseover event
    document.querySelectorAll('.pixel').forEach(pixel => {
        pixel.addEventListener('mouseover', event => {
            pixel.style.backgroundColor = `rgb(${colorR}, ${colorB}, ${colorG})`;
            pixel.style.border = "none";
            if(colorR>255){
                colorR=colorR-256;
            }
            colorR= colorR+1;
            if(colorG>255){
                colorG=colorG-256;
            }
            colorG= colorG+3;
            if(colorB>255){
                colorB=colorB-256;
            }
            colorB= colorB+5;

  
        })
      })
}
