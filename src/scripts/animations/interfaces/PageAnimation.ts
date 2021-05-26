export interface PageAnimation {
    scrollDirection: "up"|"down" 
    
    init(): void;

    scrollingUp(): void;

    scrollingDown(): void;

    render(): void
}