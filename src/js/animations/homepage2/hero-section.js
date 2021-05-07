import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('.hero-section')
const mainHeading = section.querySelector('.section-main .main-heading');
const mainHeadingText = mainHeading.textContent
const headingTexts = mainHeadingText.split('')
const headingTextContainer = mainHeading.parentElement.children[2]

headingTexts.forEach(text => {
    text = text.replace(/ /g, '\u00a0')

    const textDiv = document.createElement('div')
    const textContent = document.createTextNode(text)
    textDiv.appendChild(textContent)
    headingTextContainer.appendChild(textDiv)
})

mainHeading.remove()


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: section,
        scroller: '.scroll-container',
        pin: true,
        start: 'top top',
        end: () => `+=${section.offsetWidth + (headingTexts.length * 4)}`,
        // endTrigger: '.services-section',
        scrub: 2,
        markers: false,
        snap: {
            snapTo: 'labels',
            duration: {min: 0.2, max: 3},
            delay: 0,
            ease: "power1.inOut"
        },
        onLeave: ({}) => {
            gsap.to('.scroll-container', {duration: 1.5, scrollTo: '.services-section'})
        }
    }
})

// gsap.set('.hero-section .section-main .sub-heading', {alpha: 0})

tl.addLabel('start')
tl.from('.hero-section .section-main .sub-heading', {autoAlpha: 0, duration: 5}).addLabel('reveling-sub-heading');
tl.from('.hero-section .section-main .sub-heading', {scale: 2, duration: 4}).addLabel('sub-heading')
tl.from('.hero-section .section-main .heading-container div', {
    scale: 5,
    y: "random(-400, 400)",
    x: "random(-200, 200)",
    autoAlpha: 0, 
    stagger: 4,
    duration: headingTexts.length * 4
}).addLabel('end')