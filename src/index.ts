export const getElementOffset = (el: HTMLElement) => {
  let x = 0
  let y = 0
  do {
    x += el.offsetLeft - el.scrollLeft
    y += el.offsetTop - el.scrollTop
  } while ((el = el.offsetParent as HTMLElement))
  return { x, y }
}
