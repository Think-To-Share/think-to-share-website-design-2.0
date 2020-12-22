import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".homepage .our-management-section",
    }
})

tl.from('.homepage .our-management-section .section-main .person .figure', {
    autoAlpha: 0,
    x: '-20px',
    stagger: 0.2
})

tl.from('.homepage .our-management-section .section-main .person .description', {
    autoAlpha: 0,
    y: '-30px',
    stagger: 0.2
})