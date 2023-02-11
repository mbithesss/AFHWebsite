var textWrapper = document.querySelector('.Welcoming-phrase');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.Welcoming-phrase .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.Welcoming-phrase',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });