import { BasePageAnimation } from "../BasePageAnimation";
import { gsap } from 'gsap'

export class Homepage extends BasePageAnimation {
    private scroll: {
        target: number,
        current: number,
        ease: number,
    }

    private sectionDurations: {
        
    }

    constructor() {
        super();

        this.scroll = {
            target: 0,
            current: 0,
            ease: 0.08
        }
    }

    init(customScrollbar: Element) {
        this.customScrollbar = customScrollbar;
        this.registerScroll();
        this.render()

        // gsap.ticker.add(() => {
        //     console.log('hii')
        // })
    }

    render = () => {
        const scroll = this.scroll
        scroll.current += (scroll.target - scroll.current) * scroll.ease;
        if(scroll.current < 0.1) {
            scroll.current = 0;
        }

        document.querySelector('#scroll_numb').innerHTML = `current = ${scroll.current}px; target = ${scroll.target}px`;
        document.querySelector<HTMLElement>('#scroll_numb').style.transform = `translate3d(0, ${scroll.current}px, 0)`

        requestAnimationFrame(this.render)
    }

    private registerScroll() {
        this.customScrollbar.addEventListener('ps-scroll-y', () => {
            this.scroll.target = this.customScrollbar.scrollTop;
        })
    }
}