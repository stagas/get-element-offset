export const getElementOffset = (el: HTMLElement, maxDepth = Infinity) => {
  let x = 0
  let y = 0
  do {
    x += el.offsetLeft - el.scrollLeft
    y += el.offsetTop - el.scrollTop
  } while (maxDepth-- && (el = el.offsetParent as HTMLElement))
  return { x, y }
}
