import { gsap } from "gsap";
import { PageAnimation } from "../interfaces/PageAnimation";

export class FaqsAnimation {
    private animation: PageAnimation;

    constructor(animation: PageAnimation) {
        this.animation = animation
    }

    init(): gsap.core.Timeline{
        const tl = gsap.timeline({
            paused: true,
        })
        
        return tl;
    }

}