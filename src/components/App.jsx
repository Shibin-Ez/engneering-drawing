import React, {useState} from "react";

import SideBar from "./SideBar";
import Compass from "./SideTools/Compass";
import Eraser from "./SideTools/Eraser";
import Canvas from "./Canvas";

var mode, setMode;

function App(){

  [mode, setMode] = useState(0);

  return(
    <div className="flex">
      <SideBar />
      {mode==1?<Compass />:null}
      {mode==2?<Eraser />:null}
      <Canvas />
    </div>
  );
}

export default App;
export {mode};

// code

document.addEventListener("DOMContentLoaded", function() {
  $(".side-btn").on("click",(e)=>{
    switch(e.target.id){
      case "compass-btn":
        setMode(1);
        break;
      case "eraser-btn":
        setMode(2);
        break;
    }
  });
});

