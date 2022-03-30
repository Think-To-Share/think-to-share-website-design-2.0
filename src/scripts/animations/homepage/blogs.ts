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
        const read_more_txt_alt = gsap.utils.toArray(read_more_btn.querySelectorAll('.read-more-btn-alt .char'));
        let enter_animation: gsap.core.Timeline = null;
        let exit_animation: gsap.core.Timeline = null;

        read_more_txt_alt.forEach((char: HTMLElement) => {
            gsap.set(char, {
                autoAlpha: 0,
                y: -30,
            })
        })

        read_more_btn.addEventListener('mouseenter', () => {
            enter_animation = gsap.timeline({});
            if(exit_animation) {
                exit_animation.kill();
                exit_animation = null;
            }

            // Start new animation
            enter_animation.fromTo(read_more_txt, {
                y: 0,
                autoAlpha: 1,
            },
            {
                y: 15,
                autoAlpha: 0,
                duration: 0.2,
            })

            enter_animation.fromTo(read_more_txt_alt, {
                y: -30,
                autoAlpha: 0,
            },
            {
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
            })
        })

        read_more_btn.addEventListener('mouseleave', () => {
            exit_animation = gsap.timeline({});
            if(enter_animation) {
                enter_animation.kill();
                enter_animation = null;
            }

            // Start new animations
            exit_animation.fromTo(read_more_txt_alt, {
                y: 0,
                autoAlpha: 1,
            },
            {
                y: -30,
                autoAlpha: 0,
                duration: 0.2,
            })

            exit_animation.fromTo(read_more_txt, {
                y: 0,
                autoAlpha: 1,
            },
            {
                y: 0,
                autoAlpha: 1,
                duration: 0.2,
            })
        })
    }
};
                       