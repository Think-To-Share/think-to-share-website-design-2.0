import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";
export default class ServicesAnimation {
    private animation: PageAnimation;

    constructor(animation: PageAnimation) {
        this.animation = animation
    }

    init(): gsap.core.Timeline {
        const tl = gsap.timeline({
            paused: true,
        })

        document.querySelectorAll('.services-section .service-heading').forEach((heading, key) => {
            if(key === 0) {
                return;
            }

            gsap.set(heading, {
                autoAlpha: 0,
                y: 30,
            })

            tl.to(heading, {
                autoAlpha: 1,
                y: 0,
                duration: 1
            }, "+=0.2")

            const previsousEl =heading.previousElementSibling

            tl.to(previsousEl, {
                autoAlpha: 0,
                y: 30,
                scale: 0,
                duration: 0.1,
            }, "-=1")
        })

        return tl;
    }
};
