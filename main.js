const {app, BrowserWindow} = require("electron");

let win;

function CreateWindow(){
  win = new BrowserWindow({width: 800 , height: 600});
  win.loadFile("index.html");
  win.on("close", () =>{
    win = null;
  })
}

app.on("ready",CreateWindow);
