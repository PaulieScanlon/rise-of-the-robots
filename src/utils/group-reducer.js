export const groupReducer = (links) => {
  return links.reduce((items, item) => {
    const { group } = item

    items[group] = items[group] || []

    items[group].push(item)

    return items
  }, {})
}
