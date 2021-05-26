import { PageAnimation } from "./interfaces/PageAnimation";

export class BasePageAnimation implements PageAnimation {
    scrollDirection: "up" | "down";

    constructor() {
        this.scrollDirection = 'down';
    }

    init(): void {
        throw new Error("Method not implemented.");
    }

    scrollingUp(): void {
        this.scrollDirection = 'up'
    }
    
    scrollingDown(): void {
        this.scrollDirection = 'down'
    }

    render(): void {
        throw new Error("Method not implemented.");
    }
    
}