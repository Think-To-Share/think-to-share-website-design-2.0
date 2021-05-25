import '../scss/app.scss';
import PerfectScrollbar from 'perfect-scrollbar';
import { Animation } from "./animations";

const scrollContainer = document.querySelector('.scroll-container');
if(scrollContainer) {
    const ps = new PerfectScrollbar(scrollContainer, {
        minScrollbarLength: 43,
        maxScrollbarLength: 43,
        suppressScrollX: true,
        wheelSpeed: 1
    });

    window.addEventListener('resize', () => {
        ps.update();
    })

    scrollContainer.scrollTop = 0;

    const animation = new Animation
    animation.init

    scrollContainer.addEventListener('ps-scroll-y', () => {
        animation.scrolling(scrollContainer)
    })
}
