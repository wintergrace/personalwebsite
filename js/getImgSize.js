window.onload = function () {
	var imageDiv = document.querySelector("#front-page");
	alert(imageDiv.width);
  var imageSrc = document
    .getElementById("front-page")
    .style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
    .split(',')[0];

  // I just broke it up on newlines for readability

  var image = new Image();
  image.src = imageSrc;
  var width = image.width, height = image.height;
  alert('width =' + width + ', height = ' + height + 'src = ' + imageSrc);
};
