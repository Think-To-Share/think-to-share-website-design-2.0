import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const section = document.querySelector('.services-section')
const services = gsap.utils.toArray('.services-section .front-layer .service')
const leftImages = gsap.utils.toArray('.services-section .back-layer .left-images img')
const rightImages = gsap.utils.toArray('.services-section .back-layer .right-images img')
document.querySelector('.services-section .front-layer').style.width = `${services.length * 100}%`

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      scroller: '.scroll-container',
      pin: true,
      start: "top top",
      scrub: 3,
      snap: 1 / (services.length - 1),
      pinType: "fixed",
      end: () => "+=" + section.querySelector('.front-layer').offsetWidth * 4,
      onUpdate: ({progress}) => {
        const activeIndex = progress * (services.length - 1)
        const activeService = services[activeIndex]
        
        if(activeService) {
          textActiveAnimation(activeService.querySelector('.text-container h3'))
        }else {
          services.forEach(service => {
            service.querySelector('.text-container h3').style.opacity = '0.5'
          })
        }
      },
      // onLeave: ({}) => {
      //   gsap.to('.scroll-container', {duration: 1.5, scrollTo: '.why-choose-us'})
      // }
    }
});

tl.to(services, {
    xPercent: -100 * (services.length - 1),
    ease: "none",
})

tl.to(leftImages, {
  yPercent: -100 * (leftImages.length - 1)
}, "<")

tl.to(rightImages, {
  yPercent: 100 * (rightImages.length - 1)
}, "<")

function textActiveAnimation(element) {
  gsap.to(element, {alpha: 1})
}

