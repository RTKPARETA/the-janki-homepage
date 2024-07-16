
document.addEventListener('DOMContentLoaded', function() {
  var video = document.querySelector('.vdo');
  if (video) {
    video.autoplay = true;
    video.play();
  }
});


"object-fit": (
  responsive: true,
  property: object-fit,
  values: (
    contain: contain,
    cover: cover,
    fill: fill,
    scale: scale-down,
    none: none,
  )
)