import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const menuToggle = document.querySelector('.menu-toggle');
const menuWrapper = document.querySelector('.menu-wrapper');
const closeBtn = document.querySelector('.close-btn');
const listItems = document.querySelectorAll('.menu li');

let fadeInInterval;
let fadeOutInterval;

function fadeInMenu() {
  menuToggle.classList.toggle('active');
  menuWrapper.classList.toggle('show-menu');

  if (menuWrapper.classList.contains('show-menu')) {
    let delay = 0;
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
      }, delay);
      delay += 200;
    });
    clearInterval(fadeOutInterval); 
  }
}

function fadeOutMenu() {
  let opacityValue = 1;
  const totalSteps = 10;
  const stepDuration = 50;
  const stepOpacityChange = 1 / totalSteps;

  fadeOutInterval = setInterval(() => {
    opacityValue -= stepOpacityChange;
    listItems.forEach((item) => {
      item.style.opacity = Math.max(0, opacityValue);
    });
    closeBtn.style.opacity = Math.max(0, opacityValue);
    if (opacityValue <= 0) {
      clearInterval(fadeOutInterval);
      menuWrapper.classList.toggle('show-menu'); 
    }
  }, stepDuration);
}

menuToggle.addEventListener('click', fadeInMenu);
closeBtn.addEventListener('click', fadeOutMenu);

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

const tl = gsap.timeline({ defaults: { duration:1 }})
tl.fromTo(mesh.scale, { z:0, x:0, y:0 }, { z:1, x:1, y:1})
tl.fromTo("nav", {y:'-100%'}, {y:'0%'})
tl.fromTo(".header-name", { opacity: 0}, { opacity: 1})
tl.fromTo(".big-text", { opacity: 0}, { opacity: 1})
tl.fromTo(".moving-text", { opacity: 0}, { opacity: 1})





















