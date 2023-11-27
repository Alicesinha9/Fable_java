function moveCarousel(dotIndex) {
  var carouselWidth = document.querySelector(".carousel").offsetWidth;
  var containerWidth = document.querySelector(".containerxyz").offsetWidth;
  var totalMargin = 40; // Assuming 10px margin on each side

  // Calculate the move percentage
  var movePercent = (((containerWidth + totalMargin) * (dotIndex - 1)) / carouselWidth) * 100;

  document.querySelector(".carousel-container").style.transform = "translateX(-" + movePercent + "%)";
}