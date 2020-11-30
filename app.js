// Navigation

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Homepage overlay
function removeOverlay() {
  gsap.to(".homepage-overlay p", 2, {
    opacity: 0,
    y: -500,
    ease: Circ.easeIn
  });

  gsap.to(".homepage-overlay img", 2, {
    opacity: 0,
    y: -500,
    ease: Circ.easeIn
  });

  gsap.to(".homepage-overlay", 2, {
    delay: 1,
    top: "-100%",
  })
};

document.getElementById('homepage-overlay').addEventListener('click', function(e) {
  removeOverlay();
})