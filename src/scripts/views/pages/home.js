import RestaurantAPI from '../../../data/restaurant'

const Home = {
  async render() {
    return `
      <restaurant-list></restaurant-list>
    `
  },

  async afterRender() {
    const restaurants = await RestaurantAPI.getList()

    this.populateRestaurantDataToRestaurantItem(restaurants)
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
