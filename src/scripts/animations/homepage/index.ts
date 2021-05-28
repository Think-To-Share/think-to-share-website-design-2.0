import { BasePageAnimation } from "../BasePageAnimation";
import { gsap } from 'gsap'

export class Homepage extends BasePageAnimation {
    constructor() {
        super();
    }

    init() {
        this.render()

        // gsap.ticker.add(() => {
        //     console.log('hii')
        // })
    }

    render = () => {
        // console.log(this.scrollDirection);
        requestAnimationFrame(this.render)
    }
}