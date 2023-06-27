const callback = (entries, observer) => {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      await entry.target.play()
    } else {
      await entry.target.pause()
    }
  })
}

const options = {
  rootMargin: '100px'
}

const imageObserver = new IntersectionObserver(callback, options)

imageObserver.observe(document.querySelector('video'))
