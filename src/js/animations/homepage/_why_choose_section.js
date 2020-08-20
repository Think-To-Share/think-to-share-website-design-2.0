import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const whyChooseSectionTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".homepage .why-choose-section",
    }
})

whyChooseSectionTl.from('.homepage .why-choose-section .bkg', {
    scale: 0.8,
    y: 200,
    duration: 0.8,
    ease: "linear"
})
