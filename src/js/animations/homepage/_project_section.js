import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectSectionTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".homepage .projects-section",
        scrub: 1,
        pin: true,
        end: "+=" + ( document.querySelector('.homepage .projects-section').offsetWidth),
        snap: {
            snapTo: "labels",
            duration: {min: 0.2, max: 3},
            delay: 0,
            ease: "power1.inOut"
        },
        onUpdate: animationUpdate,
        onRefresh: animationUpdate,
    }
})

// Dynamic Animation
const slides = document.querySelectorAll('.homepage .projects-section .section-main .slide')
projectSectionTl.addLabel(`label-start`)
slides.forEach((slide, index) => {
    if (slides.length == index + 1) {
        return;
    }

    let x_move = (80 * (index + 1)) - 10

    projectSectionTl.addLabel(`label-${index + 1}`)
    projectSectionTl.to('.homepage .projects-section .section-main', {
        x: `-${x_move}%`,
        duration: 1,
    }).addLabel(`label-${index + 1}`)
})

document.querySelectorAll(".homepage .projects-section .section-main .slide svg text").forEach(text => {
    text.addEventListener('mouseenter', e => {
        document.querySelector('.homepage .projects-section .section-bkg').style.transform = "scale(1.08)"
        text.parentElement.style.transform = "scale(1.02)"
    })

    text.addEventListener('mouseleave', e => {
        document.querySelector('.homepage .projects-section .section-bkg').style.transform = "scale(1)"
        text.parentElement.style.transform = "scale(1)"
    })
})

function animationUpdate(self) {
    const animation_count = slides.length - 1;
    const step = (1 / animation_count) - 0.01;

    for (let i = 0; i < 1; i += step) {
        if (self.progress >= i && self.progress < i + step) {
            const active_index = Math.ceil(i * animation_count);

            slides.forEach((slide, slide_index) => {
                if (active_index == slide_index) {
                    slide.querySelector('svg text').style.fill = "#fd8733"
                }else {
                    slide.querySelector('svg text').style.fill = "rgba(255, 255, 255, 0.3)"
                }
            })

            document.querySelectorAll('.homepage .projects-section .section-bkg .bkg').forEach((bkg, bkg_index) => {
                if (active_index == bkg_index) {
                    bkg.style.display = "block"
                }else {
                    bkg.style.display = "none"
                }
            })
        }
    }
}
