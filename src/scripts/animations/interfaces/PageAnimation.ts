export interface PageAnimation {
    scrollForward: boolean

    customScrollbar: Element

    progress: {[key:string]: number}
    
    init(customScrollbar: Element): void;

    scrollingUp(): void;

    scrollingDown(): void;

    render(): void
}