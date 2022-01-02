import("./index.css")

import React from "react";
import ReactDom from "react-dom";



// let h1 = document.createElement("h1");
// h1.innerText = "Welcome to my website";
// h1.classList.add("redcolor");
// document.getElementById("root").appendChild(h1);

ReactDom.render(
    React.createElement("h1",{className:"redcolor"},["Hello",React.createElement("i",{},"React")]),
    document.getElementById("root")
)