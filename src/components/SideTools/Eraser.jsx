import React from "react";

import {mode} from "../App";

function Eraser(){
    return(
        <div id="eraser" draggable="false">

        </div>
    );
}

export default Eraser;

//eraser logic
document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);

  function startDrawing(event) {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
  }

  function draw(event) {
    if(mode==2){
        if (!isDrawing) return;
        const [x, y] = [event.offsetX, event.offsetY];
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 25;
        [lastX, lastY] = [x, y];
    } 
  }

  function stopDrawing() {
    isDrawing = false;
  }


  $(document).on("mousemove", (event)=>{
    $("#eraser").css("left",event.clientX-15);
    $("#eraser").css("top",event.clientY);
  });

});
