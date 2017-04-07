// only change "readme" pages
if (document.getElementById("readme")) {

  // add styles to body
  var body = document.body;
  body.style.minWidth = "0";
  body.style.maxWidth = "100%";

  // add styles to container
  var containers = document.querySelectorAll(".container");
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.maxWidth = "97%";
  }
}

// get the width of the table
var fileWrap = document.getElementsByClassName("file-wrap")[0];
var tWidth = fileWrap.clientWidth - 26.4; // width of section - width of icon

// determine the width of the content, message, and age sections
var cWidth = 2 * tWidth / 7;
var mWidth = 3.5 * tWidth / 7;
var aWidth = 1.5 * tWidth / 7;

// set the widths of the elements in question
var contents = document.querySelectorAll("table.files td.content");
var messages = document.querySelectorAll("table.files td.message");
var ages = document.querySelectorAll("table.files td.age");

// add styles to elements
for (var j = 0; j < ages.length; j++) {
  contents[j].style.maxWidth = cWidth + "px";
  contents[j].style.overflowX = "hidden";

  messages[j].style.maxWidth = mWidth + "px";
  messages[j].style.overflowX = "hidden";

  ages[j].style.maxWidth = aWidth + "px";
  ages[j].style.overflowX = "hidden";
}
