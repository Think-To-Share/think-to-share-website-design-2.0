import { PageAnimation } from "./interfaces/PageAnimation";

export class BasePageAnimation implements PageAnimation {
    scrollForward: boolean;

    customScrollbar: Element;

    constructor() {
        this.scrollForward = true;
    }

    init(customScrollbar: Element): void {
        throw new Error("Method not implemented.");
    }

    scrollingUp(): void {
        this.scrollForward = false
    }
    
    scrollingDown(): void {
        this.scrollForward = true
    }

    render(): void {
        throw new Error("Method not implemented.");
    }
    
}