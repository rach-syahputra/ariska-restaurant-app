import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'

window.addEventListener('DOMContentLoaded', async () => {
  const init = async () => {
    await initialData()
    initialListener()
  }

  const initialData = async () => {
    const fetchData = await fetch('../data/DATA.json')
    const response = await fetchData.json()

    populateDataToCard(response.restaurants)
  }

  const initialListener = async () => {
    const menu = document.querySelector('#menu')
    const hero = document.querySelector('.hero')
    const main = document.querySelector('main')
    const drawer = document.querySelector('#drawer')

    menu.addEventListener('click', (event) => {
      drawer.classList.toggle('open')
      event.stopPropagation()
    })

    hero.addEventListener('click', () => {
      drawer.classList.remove('open')
    })

    main.addEventListener('click', () => {
      drawer.classList.remove('open')
    })
  }

  const populateDataToCard = (restaurantData = null) => {
    if (!(typeof restaurantData === 'object')) {
      throw new Error(`Parameter restaurantData should be an object.`)
    }

    if (!Array.isArray(restaurantData)) {
      throw new Error('Parameter restaurantData should be an array.')
    }

    const restaurantList = document.querySelector('#restaurantList')

    restaurantData.map((restaurant) => {
      // Create the restaurant item article
      const restaurantItem = document.createElement('article')
      restaurantItem.classList.add('restaurant-item')

      // Create the thumbnail div
      const thumbnailDiv = document.createElement('div')
      thumbnailDiv.classList.add('restaurant-item__thumbnail')

      const img = document.createElement('img')
      img.src = restaurant.pictureId
      img.alt = restaurant.name

      const city = document.createElement('p')
      city.classList.add('restaurant-item__city')
      city.textContent = restaurant.city

      thumbnailDiv.appendChild(img)
      thumbnailDiv.appendChild(city)

      // Create the content div
      const contentDiv = document.createElement('div')
      contentDiv.classList.add('restaurant-item__content')

      const rating = document.createElement('h1')
      rating.classList.add('restaurant-item__rating')
      rating.innerHTML = `&#9733; ${restaurant.rating}`

      const name = document.createElement('h1')
      name.classList.add('restaurant-item__name')
      name.textContent = restaurant.name

      const description = document.createElement('p')
      description.classList.add('restaurant-item__description')
      description.textContent = restaurant.description

      contentDiv.appendChild(rating)
      contentDiv.appendChild(name)
      contentDiv.appendChild(description)

      // Append thumbnail and content to the restaurant item
      restaurantItem.appendChild(thumbnailDiv)
      restaurantItem.appendChild(contentDiv)

      // Append the restaurant item to the restaurant list
      restaurantList.appendChild(restaurantItem)
    })
  }

  init()
})
