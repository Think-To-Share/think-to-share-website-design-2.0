import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const categorySectionTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".homepage .category-section",
    }
})

categorySectionTl.from('.homepage .category-section .categories .category', {
    autoAlpha: 0,
    scale: 0,
    rotate: 180,
    duration: 1,
    stagger: 1,
    ease: "slow(0.7, 0.7, false)"
})
