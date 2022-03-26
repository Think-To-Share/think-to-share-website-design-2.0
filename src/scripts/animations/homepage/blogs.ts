import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";

export class BlogsAnimation {
    private animation: PageAnimation;

    constructor(animation: PageAnimation) {
        this.animation = animation
    }

    init(): gsap.core.Timeline {
        const blogs = gsap.utils.toArray('.blogs-section .section-main .blog') as gsap.TweenTarget[]
        const tl = gsap.timeline({
            paused: true,
        })

        tl.to('.projects-section', {
            autoAlpha: 0,
            duration: 0.2,
        })

        tl.to('.blogs-section .section-main .blogs', {
            yPercent: -100,
            duration: 0.5,
            delay: 0.2,
            ease: 'none',
        })

        return tl;
    }
};
