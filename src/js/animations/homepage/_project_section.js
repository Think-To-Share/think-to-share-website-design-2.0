import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const projectSectionTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".homepage .projects-section",
        start: 'top top',
        scrub: 1,
        pin: true,
        end: "+=" + ( document.querySelector('.homepage .projects-section').offsetWidth),
        snap: {
            snapTo: "labels",
            duration: {min: 0.5, max: 1},
            delay: 0.5,
            ease: "power1.inOut"
        },
        onUpdate: fixActiveColor,
        onRefresh: fixActiveColor,
    }
})

projectSectionTl.addLabel('1st')
projectSectionTl.to(".homepage .projects-section .section-main", {
    x: "-70%", 
    duration: 1,
}).addLabel('2nd')

projectSectionTl.to(".homepage .projects-section .section-main", {
    x: "-150%", 
    duration: 1,
}).addLabel('3rd')

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

function fixActiveColor(self) {
    if(self.progress >= 0 && self.progress < 0.4) {
        document.querySelector(".homepage .projects-section .section-main .slide:nth-child(2) svg text").style.fill = "rgba(255, 255, 255, 0.3)"
        document.querySelector(".homepage .projects-section .section-main .slide:nth-child(3) svg text").style.fill = "rgba(255, 255, 255, 0.3)"
        document.querySelector(".homepage .projects-section .section-main .slide:nth-child(1) svg text").style.fill = "#fd8733"
    }

    if(self.progress >= 0.4 && self.progress < 0.9) {
        document.querySelector(".homepage .projects-section .section-main .slide:nth-child(1) svg text").style.fill = "rgba(255, 255, 255, 0.3)"
        document.querySelector(".homepage .projects-section .section-main .slide:nth-child(3) svg text").style.fill = "rgba(255, 255, 255, 0.3)"
        document.querySelector(".homepage .projects-section .section-main .slide:nth-child(2) svg text").style.fill = "#fd8733"
    }

    if(self.progress >= 0.9 && self.progress == 1) {
        document.querySelector(".homepage .projects-section .section-main .slide:nth-child(1) svg text").style.fill = "rgba(255, 255, 255, 0.3)"
        document.querySelector(".homepage .projects-section .section-main .slide:nth-child(2) svg text").style.fill = "rgba(255, 255, 255, 0.3)"
        document.querySelector(".homepage .projects-section .section-main .slide:nth-child(3) svg text").style.fill = "#fd8733"
    }
}