export interface PageAnimation {
    scrollForward: boolean

    customScrollbar: Element
    
    init(customScrollbar: Element): void;

    scrollingUp(): void;

    scrollingDown(): void;

    render(): void
}