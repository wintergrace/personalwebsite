window.onload= function getImgSize() {
  var width = window.innerWidth;
  var height = width*2/3;
  if(width < 768){
    height = width*3/2;
  }
  var div = document.getElementById("front-page");
  var setHeightString = "height:" + height+"px";
  div.setAttribute("style",setHeightString);
};
window.onresize = function getImgSize() {
  var width = window.innerWidth;
  var height = width*2/3;
  if(width < 768){
    height = width*3/2;
  }
  var div = document.getElementById("front-page");
  var setHeightString = "height:" + height+"px";
  div.setAttribute("style",setHeightString);
};