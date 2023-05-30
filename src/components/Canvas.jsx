import React from "react";

function Canvas(){
    return(
        <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}></canvas>
    );
}

export default Canvas;

//drawing
// document.addEventListener("DOMContentLoaded", function() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   let isDrawing = false;
//   let lastX = 0;
//   let lastY = 0;

//   canvas.addEventListener("mousedown", startDrawing);
//   canvas.addEventListener("mousemove", draw);
//   canvas.addEventListener("mouseup", stopDrawing);
//   canvas.addEventListener("mouseout", stopDrawing);

//   function startDrawing(event) {
//     isDrawing = true;
//     [lastX, lastY] = [event.offsetX, event.offsetY];
//   }

//   function draw(event) {
//     if (!isDrawing) return;
//     const [x, y] = [event.offsetX, event.offsetY];
//     ctx.beginPath();
//     ctx.moveTo(lastX, lastY);
//     ctx.lineTo(x, y);
//     ctx.stroke();
//     [lastX, lastY] = [x, y];
//   }

//   function stopDrawing() {
//     isDrawing = false;
//   }
// });
