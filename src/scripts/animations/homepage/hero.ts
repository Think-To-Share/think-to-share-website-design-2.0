import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";

export default class HeroAimation {
    private animation: PageAnimation;

    constructor(animation: PageAnimation) {
        this.animation = animation
    }

    init(): gsap.core.Timeline {
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
            duration: 0.5 * headingTexts.length
        })

        tl.from('.hero-section .sub-heading', {
            autoAlpha: 0,
            y: 30,
            duration: 4
        })
        

        tl.to('.hero-section', {
            yPercent: -100,
            duration: 4
        }, "+=1")

        return tl;
    }
};
