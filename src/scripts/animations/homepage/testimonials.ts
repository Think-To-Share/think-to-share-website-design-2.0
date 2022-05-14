import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";
import Swiper, { Navigation, Pagination,Autoplay } from 'swiper';

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
        tl.from('.testimonials-section',{
            xPercent:100,
            duration:0.7,
        })
        tl.from('.testimonials-section',{
            duration:0.5,
        })
        tl.from('.testimonial-main',{
            autoAlpha: 0, 
            y: 50,
            duration:1.2,
        })
        tl.from(['.testimonial-top-line','.testimonial-bottom-line'],{
            scaleX:0,
            duration: 1,
        })
        tl.from('.testimonials-section',{
            duration:0.8,
        })

        return tl;
    }

   slideSwiper(){
        Swiper.use([Autoplay]);
        var swiper = new Swiper(".testimonialSwiper", {
            modules: [Navigation, Pagination],
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            keyboard: {
            enabled: true,
            },
            navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
            },
        });
   }
}