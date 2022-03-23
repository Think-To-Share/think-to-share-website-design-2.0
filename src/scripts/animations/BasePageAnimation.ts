export abstract class BasePageAnimation {
    scrollForward: boolean;

    customScrollbar: Element;

    constructor() {
        this.scrollForward = true;
    }

    scrollingUp(): void {
        this.scrollForward = false
    }
    
    scrollingDown(): void {
        this.scrollForward = true
    }
    
}