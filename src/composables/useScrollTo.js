export function useScrollTo() {
  function scrollTo(id) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  return { scrollTo }
}
