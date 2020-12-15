
const mainCircle = document.querySelector('.our-management-section .section-main .images .circle:first-child');
const mainCircleTopOffset = mainCircle.offsetTop;
const mainCircleLeftOffset = mainCircle.offsetLeft;

const circleOne = document.querySelector('.our-management-section .section-main .images .circle:nth-child(2)');
const circleTwo = document.querySelector('.our-management-section .section-main .images .circle:nth-child(3)');
const circleThree = document.querySelector('.our-management-section .section-main .images .circle:nth-child(4)');
const circleFour = document.querySelector('.our-management-section .section-main .images .circle:nth-child(5)');
const circleFive = document.querySelector('.our-management-section .section-main .images .circle:nth-child(6)');

setToOrbit(0, 50, circleOne)
setToOrbit(10, 50, circleTwo)

function setToOrbit(angle, distance, element) {
    let left = mainCircleLeftOffset + (distance * Math.sin(angle * Math.PI/180.0))
    let top = mainCircleTopOffset + (distance * Math.cos(angle * Math.PI/180.0))

    element.style.top = `${top}px`;
    element.style.left = `${left}px`;
}
