import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin, ScrollTrigger);

if(document.querySelector('body.homepage') !== null) {
    gsap.utils.toArray(".homepage .full-section").forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          onEnter: () => goToSection(i)
        });
        
        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          onEnterBack: () => goToSection(i),
        });
    });

    // Hero Section
    const heroSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".homepage .hero-section",
            markers: false,
        }
    })

    heroSectionTl.from('.homepage .hero-section .section-main .small-title', {
        y: '-50px',
        alpha: 0,
        scale: 0.5,
        duration: 1,
        ease: "power2.out"
    })

    heroSectionTl.from('.homepage .hero-section .section-main .title', {
        y: '30px',
        alpha: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
    })

    heroSectionTl.from('.homepage .hero-section .section-main .text', {
        scale: 0,
        duration: 0.5,
        ease: "power1.in"
    })

    heroSectionTl.from(CSSRulePlugin.getRule('.homepage .hero-section .section-main .text:before'), {
        cssRule: {
            alpha: 0
        }
    })

    // Service Section Animation
    const serviceSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".homepage .service-section",
            start: "bottom bottom",
            markers: false,
        }
    })

    serviceSectionTl.from('.homepage .services-section .services .service', {
        y: "500px",
        stagger: 0.2,
        clearProps: "y"
    })

    // Project Section
    require('./_project_section');
}

function goToSection(i, anim) {
    gsap.to(window, {
      scrollTo: {y: i*innerHeight, autoKill: false},
      duration: 0.5,
      ease: "power3.out"
    });
    
    if(anim) {
      anim.restart();
    }
}