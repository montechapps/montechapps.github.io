(function () {
  var container = document.getElementById("slideshow");
  var dotsWrap = document.getElementById("slideDots");
  if (!container || !dotsWrap) return;

  var slides = container.querySelectorAll(".slide");
  var current = 0;
  var intervalMs = 3200;
  var timer;

  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.className = "slide-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Show screenshot " + (i + 1));
    dot.addEventListener("click", function () {
      goTo(i);
      resetTimer();
    });
    dotsWrap.appendChild(dot);
  });

  var dots = dotsWrap.querySelectorAll(".slide-dot");

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, intervalMs);
  }

  if (slides.length > 1) {
    resetTimer();
  }
})();
