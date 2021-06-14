import { BasePageAnimation } from "../BasePageAnimation";
import { gsap } from 'gsap'
import { ScrollTrackData } from "../interfaces/ScrollTrackData";

export class Homepage extends BasePageAnimation {
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
        hero: 3,
        services: 5,
        whyChooseUs: 8,
    }

    private scrollTracks = document.querySelectorAll<HTMLElement>('.scroll-track')

    private scrollTracksData: ScrollTrackData[] = [];

    init(customScrollbar: Element) {
        this.customScrollbar = customScrollbar;
        this.registerScroll();
        this.setScrollTrackHeight()
        this.setScrollTracksData()
        this.setScrollHeight()
        this.render()

        // gsap.ticker.add(() => {
        //     console.log('hii')
        // })

        console.log(this.scrollTracksData)
    }

    render = () => {
        const scroll = this.scroll
        scroll.current += (scroll.target - scroll.current) * scroll.ease;
        if(scroll.current < 0.1) {
            scroll.current = 0;
        }

        this.transformSections()

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
            }
        })
    }

    private isVisible(trackPostion: {top: number, bottom: number}) {
        const {top, bottom} = trackPostion;
        const {height: windowHeight, threshold} = this.windowInfo;
        const {current: scrollCurrent} = this.scroll;

        return ((top - scrollCurrent) < (windowHeight + threshold)) && ((bottom - scrollCurrent) > -threshold)
    }

    private updateProgress(element: HTMLElement) {
        const progress = Math.min(Math.max((this.scroll.current - element.offsetTop + this.windowInfo.height) / element.offsetHeight, 0), 1)
        // console.log(progress)
    }
}