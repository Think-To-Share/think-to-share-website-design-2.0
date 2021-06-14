export interface PageAnimation {
    scrollDirection: "up"|"down"

    customScrollbar: Element
    
    init(customScrollbar: Element): void;

    scrollingUp(): void;

    scrollingDown(): void;

    render(): void
}