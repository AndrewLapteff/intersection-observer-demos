const loadPosts = (page) => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
    .then((res) => res.json())
    .then(posts => {
      // створюємо карточку на кожен пост в DOM
      posts.forEach((post) => {
        const card = document.createElement('div')
        card.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>`
        card.className = 'card'
        document.body.appendChild(card)
      })
      // отримуємо ПОСЛІДНІЙ елемент зі списку карточок
      const lastCard = document.querySelector('.card:last-child')
      if (lastCard) {
        // підписуємо
        infinifyObserver.observe(lastCard)
      }
    })
}

let currentPage = 2

const callback = ([entry], observer) => { // деструктуризуємо
  if (entry.isIntersecting) {
    // відміняємо підписку
    observer.unobserve(entry.target)
    // запускаємо функцію з новою сторінкою
    loadPosts(currentPage++)
  }
}

const infinifyObserver = new IntersectionObserver(callback)

loadPosts(1) // перший виклик fetch функції