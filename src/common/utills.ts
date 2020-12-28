export const getElementBySelector = (selector: string) => {
    return document.querySelector(selector)
}
export const getElementOffset = (ele: HTMLElement) => {
    return ele.getBoundingClientRect()
}
