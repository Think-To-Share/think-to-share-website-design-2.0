import { gsap } from "gsap";

const mainHeading = document.querySelector('.hero-section .section-main .main-heading');
const mainHeadingText = mainHeading.textContent
const headingTexts = mainHeadingText.split('')
const headingTextContainer = mainHeading.parentElement.children[2]

headingTexts.forEach(text => {
    text = text.replace(/ /g, '\u00a0')

    const textDiv = document.createElement('div')
    const textContent = document.createTextNode(text)
    textDiv.appendChild(textContent)
    headingTextContainer.appendChild(textDiv)
    gsap.set(textDiv, {
        y: "random(-400, 400)",
        x: "random(-200, 200)",
        scale: 4,
        autoAlpha: 0,
    })
})

mainHeading.remove()

const tl = gsap.timeline({
    paused: true,
})

tl.to('.hero-section .broken-main-heading-container div', {
    x: 0,
    y: 0,
    scale: 1,
    stagger: 1,
    autoAlpha: 1,
    duration: 2 * headingTexts.length
})

tl.from('.hero-section .sub-heading', {
    autoAlpha: 0,
    y: 30,
    duration: 4
})

export default tl;
