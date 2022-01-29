const observer1 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("square-animation");
    }
  });
});

observer1.observe(document.querySelector(".animation_on_scroll1"));

const observer2 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("square-animation");
    }
  });
});

observer2.observe(document.querySelector(".animation_on_scroll2"));

const observer3 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("square-animation");
    }
  });
});

observer3.observe(document.querySelector(".animation_on_scroll3"));

const observer_carousel = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("karuselianim");
    }
  });
});

observer_carousel.observe(document.querySelector("#testimonials"));

const fasi_satauri = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("fasi_satauri");
    }
  });
});

fasi_satauri.observe(document.querySelector("#fasi_satauri"));

const fasi_karta1 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      {
        entry.target.classList.add("fasi_karta");
      }
      // Add the animation class
    }
  });
});

fasi_karta1.observe(document.querySelector("#fasi_karta1"));

const fasi_karta2 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      entry.target.classList.add("fasi_karta");
    }
  });
});

fasi_karta2.observe(document.querySelector("#fasi_karta2"));

const fasi_karta3 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      entry.target.classList.add("fasi_karta");
    }
  });
});

fasi_karta3.observe(document.querySelector("#fasi_karta3"));
