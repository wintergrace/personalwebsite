function revealOnScroll(){
    var revealElements = document.querySelectorAll(".reveal-scroll");
    for(var i = 0; i < revealElements.length; i++){
      var height = window.innerHeight;
      var distanceTop = revealElements[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if(distanceTop < height-elementVisible) revealElements[i].classList.add("active");
      else revealElement[i].classList.remove("active");
    }
  }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();