export const debounce = (fn, msDelay) => {
  let inDebounce

  return () => {
    const context = this
    const args = arguments

    clearTimeout(inDebounce)

    inDebounce = setTimeout(() => fn.apply(context, args), msDelay)
  }
}
