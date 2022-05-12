import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";
import Swiper from 'swiper';

export class TestimonialsAnimation {
    private animation: PageAnimation;

    constructor(animation: PageAnimation) {
        this.animation = animation
        this.slideSwiper();
    }

    init(): gsap.core.Timeline{
        const tl = gsap.timeline({
            paused: true,
        })
        return tl;
    }

   slideSwiper(){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            keyboard: {
            enabled: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });
   }
}