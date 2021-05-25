export interface PageAnimation {
    init(): void;

    scrolling(customScrollbar: Element): void;
}