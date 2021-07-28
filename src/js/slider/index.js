const slider = new KeenSlider(".keen-slider", {
    slidesPerView: 5,
    spacing: 4,
    created: function (instance) {
      document
        .getElementById("arrow-left")
        .addEventListener("click", function () {
          instance.prev()
        })
  
      document
        .getElementById("arrow-right")
        .addEventListener("click", function () {
          instance.next()
        })
        
      updateClasses(instance)
    },
    slideChanged(instance) {
      updateClasses(instance)
    },
  })
  
  function updateClasses(instance) {
    let slide = instance.details().relativeSlide
    let arrowLeft = document.getElementById("arrow-left")
    let arrowRight = document.getElementById("arrow-right")
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled")
    slide === instance.details().size - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled")
  }
  