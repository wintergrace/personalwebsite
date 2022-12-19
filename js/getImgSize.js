var timeout;
window.onload= function getImgSize() {
  var width = window.innerWidth;
  var height = width*2/3;
  if(width < 768){
    height = width*3/2;
  }
  var div = document.getElementById("front-page");
  if(!div) div = document.getElementById("about-page");
  if(!div) div = document.getElementById("projects-page");
  var setHeightString = "height:" + height+"px";
  div.setAttribute("style",setHeightString);
  playSize();
};
window.onresize = function getImgSize() {
  var width = window.innerWidth;
  var height = width*2/3;
  if(width < 768){
    height = width*3/2;
  }
  var div = document.getElementById("front-page");
  if(!div) div = document.getElementById("about-page");
  if(!div) div = document.getElementById("projects-page");
  var setHeightString = "height: " + height+"px";
  div.setAttribute("style",setHeightString);
  clearTimeout(timeout);
  timeout = setTimeout(playSize, 100);
};

function playSize(){
  var image = document.getElementById("game-image");
  var playHeight = image.clientHeight;
  var playlist = document.getElementById("playlist");
  var playHeightString = "height: " + playHeight+"px";
  playlist.setAttribute("style", playHeightString);
  /*alert(playHeightString);
  alert(playlist.clientHeight);*/
}