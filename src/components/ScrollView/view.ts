// @ts-ignore
import Hg from 'hogan.js'
import { ScrollViewConfig } from './config'
export const view = (prop: ScrollViewConfig):string => {
    const name = '周看盛'
    const template = `
        <div class="zb-scroll-view">
            <div class="zv-scroll-view-content" style="height: 500px">{{name}}</div>
            <div class="zv-scroll-view-scroller-h">
                <div class="zb-scroll-view-bar"></div>
            </div>
            <div class="zv-scroll-view-scroller-v">
                <div class="zb-scroll-view-bar"></div>
            </div>
        </div>
    `
    return Hg.compile(template).render({ name })
}
