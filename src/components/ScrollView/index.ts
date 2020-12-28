import { ScrollViewConfig } from './config'
import { view } from './view'
import { getElementBySelector, getElementOffset } from '../../common/utills'
export default class ScrollView {
    private ele: HTMLElement
    private readonly scrollView: HTMLElement
    private readonly scrollViewAttr: DOMRect
    private readonly scrollContent: HTMLElement
    constructor (props: ScrollViewConfig) {
        const { ele } = props
        this.ele = ele
        this.ele.innerHTML = view()
        this.scrollView = getElementBySelector('.zb-scroll-view') as HTMLElement
        this.scrollContent = getElementBySelector('.zv-scroll-view-content') as HTMLElement
        this.scrollViewAttr = getElementOffset(this.scrollView)
        this.initData()
        this.initEvent()
    }

    initData () {
        const { height, width } = getElementOffset(this.scrollContent) as DOMRect
        console.log(height, width)
    }

    initEvent () {
        if (this.scrollView) {
            this.scrollView.addEventListener('wheel', this.handleWheel.bind(this), false)
        }
    }

    handleWheel (evt: MouseEvent) {
        console.log('++++++++++++++')
        console.log(this.scrollViewAttr)
        console.log(evt)
    }
}
