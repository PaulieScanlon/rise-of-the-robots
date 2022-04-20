export const isHref = (href) => {
  return href.match(/^(http|https):/g)
}
