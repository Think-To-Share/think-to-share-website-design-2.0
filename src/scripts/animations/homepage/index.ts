import PerfectScrollbar from "perfect-scrollbar";
import { PageAnimation } from "../interfaces/PageAnimation";

export class Homepage implements PageAnimation {
    constructor() {
        
    }

    init() {

    }

    scrolling(customScrollbar: Element) {
        customScrollbar.addEventListener('ps-scroll-up', () => {
            console.log('up')
        })

        customScrollbar.addEventListener('ps-scroll-down', () => {
            console.log('down')
        })
    }
}