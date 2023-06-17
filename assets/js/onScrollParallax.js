var lastScrollTop = 0, delta = 5;
$(window).scroll(function () {
  var _scroll = $(this).scrollTop();

  var mountains = $('#mountains');
  var rocket = $('#rocket');
  var moon = $('#moon');
  var asteroid = $('#asteroid');
  var myImg = $('#my-img');
  var landingText = $('#landing-text');
  // get all default values from css
  var mountainsDefaultBottom = parseInt(mountains.css('bottom'));
  var rocketDefaultBottom = parseInt(rocket.css('bottom'));
  var moonDefaultBottom = parseInt(moon.css('top')); // Only top is used for moon
  var asteroidDefaultBottom = parseInt(asteroid.css('bottom'));
  var myImgDefaultBottom = parseInt(myImg.css('bottom'));
  var landingTextDefaultBottom = parseInt(landingText.css('bottom'));
  // console.log(_scroll);

  if (Math.abs(lastScrollTop - _scroll) <= delta) return;

  if (_scroll > lastScrollTop) {
    // downscroll code
    console.log(_scroll + 'px down')
  } else {
    // upscroll code
    console.log(_scroll + 'px up')
  }
  lastScrollTop = _scroll;
});