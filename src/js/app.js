import '../scss/app.scss';
import PerfectScrollbar from 'perfect-scrollbar';

const scrollContainer = document.querySelector('.scroll-container');
if(scrollContainer) {
    const ps = new PerfectScrollbar(scrollContainer, {
        suppressScrollX: true,
        wheelSpeed: 1,
    });

    window.addEventListener('resize', () => {
        ps.update();
    })
}

require('./animations')
require('./homepage')


