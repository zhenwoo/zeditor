// @ts-ignore
import doT from 'dot'
export const view = ():string => {
    const name = '周看盛'
    const template = `
        <div class="zb-scroll-view">
            <div class="zv-scroll-view-content">{{=it.name}}</div>
            <div class="zv-scroll-view-scroller-h">淡淡的</div>
            <div class="zv-scroll-view-scroller-v"></div>
        </div>
    `
    return doT.template(template)({ name })
}
