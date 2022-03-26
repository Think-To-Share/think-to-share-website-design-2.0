import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";
export class ServicesAnimation {
    private animation: PageAnimation;

    constructor(animation: PageAnimation) {
        this.animation = animation
    }

    init(): gsap.core.Timeline {
        const tl = gsap.timeline({
            paused: true,
        })

        const totalServicesCount = document.querySelectorAll('.services-section .section-main .front-layer .service').length
        const leftImages = gsap.utils.toArray('.services-section .back-layer .left-images img')
        const rightImages = gsap.utils.toArray('.services-section .back-layer .right-images img')

        document.querySelectorAll('.services-section .front-layer h3').forEach(heading => {
            heading.addEventListener('mouseenter', () => {
                gsap.to(leftImages, {
                    filter: 'blur(10px)',
                    ease: "circ.out"
                })

                gsap.to(rightImages, {
                    filter: 'blur(10px)',
                    ease: "circ.out"
                })
            })

            heading.addEventListener('mouseleave', () => {
                gsap.to(leftImages, {
                    filter: 'blur(0px)',
                    ease: "circ.out"
                })

                gsap.to(rightImages, {
                    filter: 'blur(0px)',
                    ease: "circ.out"
                })
            })
        })

        tl.to('.services-section', {
            duration: 0.07
        })

        tl.to('.services-section .section-main .front-layer', {
            xPercent: -((totalServicesCount - 1) * 100),
            duration: 1,
            ease: 'none'
        })

        tl.to(leftImages, {
            yPercent: -100 * (leftImages.length - 1),
            duration: 1,
            ease: 'none',
        }, '<')

        tl.to(rightImages, {
            yPercent: 100 * (rightImages.length - 1),
            duration: 1,
            ease: 'none'
        }, '<')

        tl.to('.services-section', {
            duration: 0.07
        })

        tl.to('.services-section', {
            scale: 0,
            duration: 0.08,
            ease: "expo.out"
        })

        return tl;
    }
};
