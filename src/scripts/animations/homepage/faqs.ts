import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";

export class FaqsAnimation {
    private animation: PageAnimation;

    constructor(animation: PageAnimation) {
        this.animation = animation
    }

    init(): gsap.core.Timeline{
        const tl = gsap.timeline({
            paused: true,
        })
        tl.from('.faqs-section',{
            yPercent:100,
        })
        tl.from('.faqs-section',{
            duration:0.5,
        })
        tl.from(".faq-section-heading", {
            autoAlpha:0,
            scale:0,
            duration: 1,
        })
        tl.from(".accordion-item", {
            autoAlpha:0,
            y:50,
            duration: 0.8,
            ease: "power4.out",
            stagger:0.3
        })
        return tl;
    }

}