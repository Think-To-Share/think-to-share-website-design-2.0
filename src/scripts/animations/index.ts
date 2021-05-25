import { Homepage } from "./homepage";
import { PageAnimation } from "./interfaces/PageAnimation";

export class Animation {
    private currentPageAnimation: PageAnimation; 

    public constructor() {
        const bodyClasses = document.body.classList;
        if(bodyClasses.contains('homepage')) {
            this.currentPageAnimation = new Homepage;
        }
    }

    public init() {
        this.currentPageAnimation.init()
    }

    public scrolling(customScrollbar: Element) {
        this.currentPageAnimation.scrolling(customScrollbar)
    }
}