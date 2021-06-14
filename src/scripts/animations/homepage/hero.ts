import { gsap } from "gsap";

const tl = gsap.timeline({
    paused: true,
})

tl.to('.hero-section h1', {
    xPercent: 30,
})

export default tl;
