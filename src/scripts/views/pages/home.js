import RestaurantAPI from '../../../data/restaurant'
import Loading from '../../../utils/loading'
import ErrorPopupMessage from '../../../utils/error-popup-message'

const Home = {
  async render() {
    return `
      <div class="home" id="home">
      </div>
    `
  },

  async afterRender() {
    const home = document.getElementById('home')

    Loading.show(home)

    try {
      const restaurants = await RestaurantAPI.getList()

      this.initializeHero(home)
      this.initializeHeadlineContent(home)
      this.initializeRestaurantItem(home, restaurants)
    } catch (error) {
      console.error(error)
      ErrorPopupMessage.show('Get restaurant list failed')
    }

    Loading.hide(home)
  },

  initializeHero(container) {
    const hero = document.createElement('hero-element')
    container.appendChild(hero)
  },

  initializeHeadlineContent(container) {
    const headlineContent = document.createElement('headline-content')
    container.appendChild(headlineContent)
  },

  initializeRestaurantItem(container, restaurants) {
    const restaurantList = document.createElement('restaurant-list')

    restaurants.forEach((restaurant) => {
      const restaurantItem = this.createRestaurantItem(restaurant)
      restaurantList.appendChild(restaurantItem)
    })

    container.appendChild(restaurantList)
  },

  createRestaurantItem(restaurant) {
    const restaurantItem = document.createElement('restaurant-item')
    restaurantItem.restaurant = restaurant

    return restaurantItem
  }
}

export default Home
