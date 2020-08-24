import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let animationFinished = false;

const whyChooseSectionTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".homepage .why-choose-section",
        onUpdate: (self) => {
            if(animationFinished && self.isActive) {
                let scrolling = false

                if(scrolling === false) {
                    scrolling = true;

                    gsap.to('.homepage .why-choose-section .heading', {
                        rotate: ( self.getVelocity() * 0.01 ),
                        ease: 'liner'
                    })

                    setTimeout(() => {
                        scrolling = false

                        gsap.to('.homepage .why-choose-section .heading', {
                            rotate: 0,
                        })
                    }, 250)
                }
            }
        },
    },
    onComplete: () => {
        animationFinished = true;
    }
})

whyChooseSectionTl.from('.homepage .why-choose-section .bkg', {
    scale: 0.8,
    y: 200,
    duration: 0.8,
    ease: "linear"
})

whyChooseSectionTl.from('.homepage .why-choose-section .text .h3', {
    scale: 0,
    autoAlpha: 0,
    duration: 2.5, 
    ease: "elastic.out(1, 0.3)"
})

whyChooseSectionTl.from('.homepage .why-choose-section .text p', {
    scale: 0,
    duration: 0.5, 
    ease: "power2.inOut"
})

whyChooseSectionTl.from('.homepage .why-choose-section .text p', {
    filter: "blur(2px)",
    duration: 0.5, 
    ease: "power2.inOut"
})

whyChooseSectionTl.from('.homepage .why-choose-section .buttons a', {
    scale: 0,
    rotateX: -180,
    duration: 2.5, 
    ease: "bounce.out"
})
