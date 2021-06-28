import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";

const tl = gsap.timeline({
    paused: true,
})

export default class {
    private animation: PageAnimation;

    private activeSlide = 1;

    private currentXPercent = 10

    constructor(animation: PageAnimation) {
        this.animation = animation
    }

    init(): gsap.core.Timeline {
        const slides = gsap.utils.toArray('.projects-section .section-main .slide')
        gsap.set('.projects-section .section-main', {
            xPercent: 10,
        })

        gsap.set(slides, {
            fill: '#fff',
            fillOpacity: 0.3
        })

        gsap.set(slides[0], {
            fill: '#fd8733',
            fillOpacity: 1,
        })

        const tl = gsap.timeline({
            paused: true,
            onUpdate: () => {
                this.animate(slides)
            }
        })

        tl.to('.projects-section', {
            duration: 1,
            ease: 'none'
        })

        // tl.to('.projects-section .section-main', {
        //     xPercent: -380,
        //     ease: 'none'
        // })

        return tl;
    }

    private animate(slides: any[]) {
        const progress = this.animation.progress.projects;
        const steps = 1 / (slides.length - 1)

        // if(progress >= 0.25 && progress < 0.50 && this.activeSlide == 1) {
        //     gsap.to(slides, {
        //         xPercent: '-=40'
        //     })

        //     this.activeSlide++
        // }

        slides.forEach((_slide, index) => {
            if(index == slides.length - 1) {
                return;
            }

            const start = steps * index
            const end = steps * (index + 1)
            let animation = null

           if(progress >= start && progress < end) {
               if(this.animation.scrollForward && this.activeSlide == (index + 1)) {
                    this.currentXPercent -= 80;

                    animation = gsap.to('.projects-section .section-main', {
                        xPercent: this.currentXPercent,
                    })

                    this.activeSlide++

               }else if(! this.animation.scrollForward && (this.activeSlide - 1) == (index + 1)) {
                    this.currentXPercent += 80;

                    animation = gsap.to('.projects-section .section-main', {
                        xPercent: this.currentXPercent,
                        duration: 1,
                        ease: "expo.out"
                    })

                    this.activeSlide--
               }

               if(animation) {
                   animation.eventCallback('onComplete', () => {
                    gsap.set('.projects-section .section-main', {
                        xPercent: this.currentXPercent,
                        duration: 1,
                        ease: "expo.out"
                    })

                    gsap.set(slides, {
                        fill: '#fff',
                        fillOpacity: 0.3
                    })

                    gsap.to(slides[this.activeSlide - 1], {
                        fill: '#fd8733',
                        fillOpacity: 1,
                        duration: 1,
                        ease: "sine.out"
                    })
                })
               }
           }
        })
    }
};
