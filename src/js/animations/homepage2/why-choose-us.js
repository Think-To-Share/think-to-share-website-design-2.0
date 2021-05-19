import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const section = document.querySelector('.why-choose-us')

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: section,
        scroller: '.scroll-container',
        pin: true,
        start: 'top top',
        scrub: 2,
    }
})

tl.to(section.querySelector('h2'), {
    y: 20,
    alpha: 0,
})
