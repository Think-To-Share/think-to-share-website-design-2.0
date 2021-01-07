import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section_name = '.web-design .about-section';
const section = document.querySelector(section_name);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: section
    }
})

tl.from(`${section_name} .title-section .title`, {
    y: 50,
    autoAlpha: 0,
    duration: 1.2
})

tl.from(`${section_name} .title-section .small-title`, {
    scale: 0,
    autoAlpha: 0,
    duration: 2,
    ease: "back.out(1.7)",
})
