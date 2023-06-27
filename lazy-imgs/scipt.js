const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src
      observer.unobserve(entry.target)
    }
  })
}

const options = {
  rootMargin: '100px'
}

const imageObserver = new IntersectionObserver(callback, options)

document.querySelectorAll('img').forEach((img) => {
  imageObserver.observe(img)
})