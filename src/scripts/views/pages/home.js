import RestaurantAPI from '../../../data/restaurant'
import Loading from '../../../utils/loading'

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <headline-content></headline-content>
      <restaurant-list></restaurant-list>
    `
  },

  async afterRender() {
    const restaurantList = document.querySelector('restaurant-list')

    Loading.show(restaurantList)

    try {
      const restaurants = await RestaurantAPI.getList()

      this.populateRestaurantDataToRestaurantItem(restaurants)
    } catch (error) {
      console.error(error)
    }

    Loading.hide(restaurantList)
  },

  populateRestaurantDataToRestaurantItem(restaurants) {
    const restaurantList = document.querySelector('restaurant-list')

    restaurants.forEach((restaurant) => {
      const restaurantItem = this.createRestaurantItem(restaurant)
      restaurantList.appendChild(restaurantItem)
    })
  },

  createRestaurantItem(restaurant) {
    const restaurantItem = document.createElement('restaurant-item')
    restaurantItem.restaurant = restaurant

    return restaurantItem
  }
}

export default Home
