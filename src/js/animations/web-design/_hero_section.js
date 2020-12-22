import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section_name = '.web-design .hero-section';
const section = document.querySelector(section_name);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: section
    }
})

tl.from(`${section_name} .title`, {
    yPercent: '-10',
    alpha: 0,
    duration: 1
})

tl.from(`${section_name} .title span`, {
    autoAlpha: 0
})

tl.from(`${section_name} .small-title`, {
    autoAlpha: 0,
    scaleY: 0.5,
    xPercent: 10,
})
