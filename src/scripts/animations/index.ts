import { Homepage } from "./homepage";
import { PageAnimation } from "./interfaces/PageAnimation";

export class Animation {
    private currentPageAnimation: PageAnimation;
    private customScrollbar: Element

    public constructor(customScrollbar: Element) {
        this.customScrollbar = customScrollbar;

        const bodyClasses = document.body.classList;
        if(bodyClasses.contains('homepage')) {
            this.currentPageAnimation = new Homepage;
        }
    }

    public init() {
        this.currentPageAnimation.init(this.customScrollbar)
        this.registerScrollEvent()
    }

    private registerScrollEvent() {
        const ev = new CustomEvent('scroll')

        this.customScrollbar.addEventListener('ps-scroll-y', () => {
            this.customScrollbar.addEventListener('ps-scroll-up', () => {
                this.currentPageAnimation.scrollingUp()
                window.dispatchEvent(ev)
            })

            this.customScrollbar.addEventListener('ps-scroll-down', () => {
                this.currentPageAnimation.scrollingDown()
                window.dispatchEvent(ev)
            })
        })
    }
}