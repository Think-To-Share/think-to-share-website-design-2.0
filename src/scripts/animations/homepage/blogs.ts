import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";

export class BlogsAnimation {
    private animation: PageAnimation;

    constructor(animation: PageAnimation) {
        this.animation = animation
        this.registerSectionAnimations();
    }

    init(): gsap.core.Timeline {
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
        
        tl.from('.blogs-section .section-main .read-more-btn', {
            autoAlpha: 0,
            y: 100,
        })

        return tl;
    }

    registerSectionAnimations() {
        const read_more_btn = document.querySelector('.blogs-section .read-more-btn');
        const read_more_txt = read_more_btn.querySelector('.read-more-btn-txt');

        read_more_btn.addEventListener('mouseenter', () => {
            gsap.to(read_more_txt, {
                y: 15,
                autoAlpha: 0,
                duration: 0.2,
            })
        })

        read_more_btn.addEventListener('mouseleave', () => {
            gsap.to(read_more_txt, {
                y: 0,
                autoAlpha: 1,
                duration: 0.2,
            })
        })
    }
};
