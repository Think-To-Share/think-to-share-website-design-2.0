import { BasePageAnimation } from "../BasePageAnimation";
import { gsap } from 'gsap'
import { ScrollTrackData } from "../interfaces/ScrollTrackData";
import { HeroAnimation } from './hero'
import { ServicesAnimation } from './services'
import WhyChooseUsAnimation from './whyChooseUs'
import { BlogsAnimation } from "./blogs";
import { ProjectsAnimation } from './projects'
import { PageAnimation } from "../interfaces/PageAnimation";
import { TestimonialsAnimation } from "./testimonials";
import { FaqsAnimation } from "./faqs";


export class Homepage extends BasePageAnimation implements PageAnimation {
    activeTimeline = "";

    private scroll = {
        target: 0,
        current: 0,
        ease: 0.08
    }

    private windowInfo = {
        height: window.innerHeight,
        scrollHeight: 0,
        threshold: 100
    }

    private sectionDurations: {[key: string]: number} = {
        offset: 1,
        hero: 4.5,
        services: 5,
        project_offset: 0.5,
        projects: 4,
        blogs: 4,
        testimonials: 3,
        faqs:4,
    }

    progress: {[key:string]: number} = {
        hero: 0,
        services: 0,
        projects: 0,
        blogs: 0,
        testimonials: 0,
        faqs:0,
    }

    private timelines: {[key:string]: gsap.core.Timeline} = {
        hero: new HeroAnimation(this).init(),
        services: new ServicesAnimation(this).init(),
        projects: new ProjectsAnimation(this).init(),
        blogs: new BlogsAnimation(this).init(),
        testimonials: new TestimonialsAnimation(this).init(),
        faqs: new FaqsAnimation(this).init(),
    }

    private scrollTracks = document.querySelectorAll<HTMLElement>('.scroll-track[data-timeline]')

    private scrollTracksData: ScrollTrackData[] = [];

    init(customScrollbar: Element) {
        this.customScrollbar = customScrollbar;
        this.registerScroll();
        this.setScrollTrackHeight()
        this.setScrollTracksData()
        this.setScrollHeight()
        this.render()

        gsap.ticker.lagSmoothing(1000, 16);
        gsap.ticker.add(this.updateTimelines)
    }

    render = () => {
        const scroll = this.scroll
        scroll.current += (scroll.target - scroll.current) * scroll.ease;
        if(scroll.current < 0.1) {
            scroll.current = 0;
        }

        this.transformSections()
        this.updateOtherSection()

        requestAnimationFrame(this.render)
    }

    private registerScroll() {
        this.customScrollbar.addEventListener('ps-scroll-y', () => {
            this.scroll.target = this.customScrollbar.scrollTop;
        })
    }

    private setScrollTrackHeight() {
        Object.keys(this.sectionDurations).forEach(key => {
            const sectionHeight = this.sectionDurations[key] * window.innerHeight;
            document.querySelector<HTMLElement>(`.scroll-track-${key}`).style.height = `${sectionHeight}px`;
        })
    }

    private setScrollTracksData() {
        this.scrollTracks.forEach(scrollTrack => {
            scrollTrack.style.transform = 'translate3d(0, 0, 0)'
            const {top, bottom} = scrollTrack.getBoundingClientRect();

            const data = {
                element: scrollTrack,
                position: {
                    top,
                    bottom
                },
            }

            this.scrollTracksData.push(data)
        })
    }

    private setScrollHeight() {
        const totalTracks = this.scrollTracks.length
        const lastTrack = this.scrollTracksData[totalTracks - 1]
        const scrollHeight = lastTrack.position.bottom

        this.windowInfo.scrollHeight = scrollHeight
        document.querySelector<HTMLElement>('.scroll-height').style.height = `${scrollHeight}px`
    }

    private transformSections() {
        const transform = `translate3d(0, ${-this.scroll.current}px, 0)`;

        this.scrollTracksData.forEach(trackData => {
            const {element, position} = trackData;
            
            if(this.isVisible(position)) {
                element.style.transform = transform
                this.updateProgress(element)
                this.activeTimeline = element.dataset.timeline
            }
        })
    }

    private updateOtherSection() {
        if(this.activeTimeline && this.progress[this.activeTimeline] > .5) {
            const activeProgressindex = Object.keys(this.progress).indexOf(this.activeTimeline)

            Object.keys(this.progress).forEach((progressKey, index) => {
                if(index < activeProgressindex) {
                    this.progress[progressKey] = 1
                }

                if(index > activeProgressindex) {
                    this.progress[progressKey] = 0
                }
            })
        }
    }

    private isVisible(trackPostion: {top: number, bottom: number}) {
        const {top, bottom} = trackPostion;
        const {height: windowHeight, threshold} = this.windowInfo;
        const {current: scrollCurrent} = this.scroll;

        return ((top - scrollCurrent) < (windowHeight + threshold)) && ((bottom - scrollCurrent) > -threshold)
    }

    private updateProgress(element: HTMLElement) {
        const progress = Math.min(Math.max((this.scroll.current - element.offsetTop + this.windowInfo.height) / element.offsetHeight, 0), 1)
        this.progress[element.dataset.timeline] = progress
    }

    private updateTimelines = () => {
        Object.keys(this.progress).forEach(key => {
            this.timelines[key].progress(this.progress[key])
        })
    }
}
