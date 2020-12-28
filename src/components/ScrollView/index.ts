import { ScrollViewConfig } from './config'
import { view } from './view'
import { getElementBySelector, getElementOffset } from '../../common/utills'
export default class ScrollView {
    private ele: HTMLElement
    private readonly scrollView: HTMLElement
    constructor (props: ScrollViewConfig) {
        const { ele } = props
        this.ele = ele
        this.ele.innerHTML = view(props)
        this.scrollView = getElementBySelector('.zb-scroll-view') as HTMLElement
        this.initEvent()
    }

    initEvent () {
        console.log(this.scrollView)
        if (this.scrollView) {
            this.scrollView.addEventListener('wheel', this.handleWheel.bind(this), false)
        }
    }

    handleWheel (evt: MouseEvent) {
        const eleOffset:DOMRect = getElementOffset(this.scrollView)
        console.log(eleOffset)
        console.log(evt)
    }
}
