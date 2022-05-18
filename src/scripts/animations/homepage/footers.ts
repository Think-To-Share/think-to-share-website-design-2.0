import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";

export class FootersAnimation {
    private animation: PageAnimation;

    constructor(animation: PageAnimation) {
        this.animation = animation
    }


    init(): gsap.core.Timeline{
        const tl = gsap.timeline({
            paused: true,
        })
        const footerContent = gsap.utils.toArray('.footer_section_listItem')

        tl.from('.footer-section',{
            xPercent: -100,
            duration: 0.1,
        })

        tl.to(footerContent, {
            yPercent: -100,
            duration: 1
        })
       
        return tl;
    }

}