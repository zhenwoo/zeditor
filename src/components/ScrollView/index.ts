import { ScrollViewConfig } from './config'
import { view } from './view'
export default class ScrollView {
    private ele: HTMLElement
    constructor (props: ScrollViewConfig) {
        const { ele } = props
        this.ele = ele
        this.ele.innerHTML = view()
    }
}
