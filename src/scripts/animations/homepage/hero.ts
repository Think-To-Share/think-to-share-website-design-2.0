import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";

export class HeroAnimation {
    private animation: PageAnimation;

    video = document.querySelector<HTMLMediaElement>('.bkg-video')

    constructor(animation: PageAnimation) {
        this.animation = animation
        this.video.play()
    }

    init(): gsap.core.Timeline {
        const headingChars = gsap.utils.toArray('.hero-section .section-main .main-heading .char')

        headingChars.forEach((char:HTMLElement) => {
            gsap.set(char, {
                y: "random(-400, 400)",
                x: "random(-200, 200)",
                scale: 4,
                autoAlpha: 0,
            })
        })

        const tl = gsap.timeline({
            paused: true,
        })

        tl.to(headingChars, {
            x: 0,
            y: 0,
            scale: 1,
            stagger: 1,
            autoAlpha: 1,
            duration: 0.5 * headingChars.length
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
