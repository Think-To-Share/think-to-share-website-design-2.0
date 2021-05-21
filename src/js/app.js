import '../scss/app.scss';
import PerfectScrollbar from 'perfect-scrollbar';

const scrollContainer = document.querySelector('.scroll-container');
if(scrollContainer) {
    const ps = new PerfectScrollbar(scrollContainer, {
        suppressScrollX: true,
        wheelSpeed: 1,
        wheelPropagation: true,
        swipeEasing: true,
    });

    window.addEventListener('resize', () => {
        ps.update();
    })

    scrollContainer.scrollTop = 0;
}

require('./animations')
