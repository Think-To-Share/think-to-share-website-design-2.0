import { BasePageAnimation } from "../BasePageAnimation";

export class Homepage extends BasePageAnimation {
    constructor() {
        super();
    }

    init() {
        this.render()
    }

    render = () => {
        console.log(this.scrollDirection);
        requestAnimationFrame(this.render)
    }
}