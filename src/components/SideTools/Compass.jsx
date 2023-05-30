import React from "react";

import {mode} from "../App";


function Compass(){
    return(
        <div id="compass" className="flex" draggable="false">
            <div id="compass-sharp">

            </div>
            <div id="compass-body">

            </div>
            <div id="compass-pencil">

            </div>
        </div>
    );
}

export default Compass;

let xMouse=0, yMouse=0, xComp=200, yComp=200;

let tanValue = (yMouse-yComp)/(xMouse-xComp);

let compLength = 60, compDegree=0;

function fullRotate(x){
    if(x<=0 && yComp-yMouse<0){
        x +=180;
    } else if(x>=0 && yComp-yMouse>0){
        x +=180;
    } else if(x==0 && yComp-yMouse==0 && xComp-xMouse>0){
        x = 180;
    }
    return x;
}
// function toQuadAngles(x){
//     if(x<0 && x>-90){
//         x *= -1;
//     } else if(x<=270 && x>180){
//         x = 360-x;
//     }
//     return x;
// }

let mouseStatus = "none", xRelease, yRelease;

$(document).on("mouseup",(e)=>{
    mouseStatus = "up";
    xRelease = e.clientX;
    yRelease = e.clientY;
    // mousedownCount = 0;
});

$(document).on('mousemove', function(e) {
    // console.log("x: " + xMouse + " y: " + yMouse);
    // console.log((Math.atan(tanValue) * 180 / Math.PI) + " " + fullRotate((Math.atan(tanValue) * 180 / Math.PI)));
    xMouse = e.clientX; 
    yMouse = e.clientY - 25;
    tanValue = (yComp-yMouse)/(xComp-xMouse);
    compDegree = fullRotate((Math.atan(tanValue) * 180 / Math.PI))
    $("#compass").css("transform", "rotate("+ compDegree + "deg)");

    if(mousedownCount%2 == 0){
        $("#compass").css("left", xMouse);
        $("#compass").css("top", yMouse+15);

        compLength = 0;
        $("#compass-body").css("width", compLength-60);
    }
});

let mousedownCount = 0;

document.addEventListener("DOMContentLoaded", function() {
    $("#compass-btn").on("click", ()=>{
        console.log("click");
        mousedownCount = 0;
    });
});

$(document).on("mousedown",function(e){

    if(e.target.className !== "side-btn")
        mousedownCount++;
    if(mousedownCount%2 == 1){
        $("#compass").css("left", xMouse);
        $("#compass").css("top", yMouse+15);

        xComp = xMouse;
        yComp = yMouse;

        $("#compass").css("transform-origin", "left center");
        
        compLength = 0;
        $("#compass-body").css("width", compLength-60);

        mouseStatus = "down";
    }

}).on('mousemove', function() {
    if(mouseStatus === "down"){
        compLength = Math.sqrt(Math.pow((xComp-xMouse),2) + Math.pow((yComp-yMouse),2));
        $("#compass-body").css("width", compLength-60);
    }
});

// Drawing
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
  
    canvas.addEventListener("mouseup", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousedown", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
  
    function startDrawing(event) {
        if(mousedownCount%2 == 1 && mode == 1){
            isDrawing = true;
            [lastX, lastY] = [xComp+compLength*Math.cos(compDegree*Math.PI/180)-58, yComp+compLength*Math.sin(compDegree*Math.PI/180)+32];
        }
    }
  
    function draw() {
        if (!isDrawing) return;
        //   console.log(xComp+compLength*Math.cos(compDegree*Math.PI/180) +" "+xComp+" "+compLength+" "+Math.cos(compDegree*Math.PI/180)+ " "+xMouse);
        if(mode==1){
            const [x, y] = [xComp+compLength*Math.cos(compDegree*Math.PI/180)-58, yComp+compLength*Math.sin(compDegree*Math.PI/180)+32];
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.strokeStyle = "black";
            ctx.lineWidth = 1;
            [lastX, lastY] = [x, y];
        } 
    }
  
    function stopDrawing() {
      isDrawing = false;
    }
});