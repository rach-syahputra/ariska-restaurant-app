import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'

const Favorites = {
  async render() {
    return `
      <favorite-list></favorite-list>
    `
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()

    this.populateRestaurantDataToRestaurantItem(restaurants)
  },

  populateRestaurantDataToRestaurantItem(restaurants) {
    const favoriteList = document.querySelector('favorite-list')

    restaurants.forEach((restaurant) => {
      const restaurantItem = this.createRestaurantItem(restaurant)
      favoriteList.appendChild(restaurantItem)
    })
  },

  createRestaurantItem(restaurant) {
    const restaurantItem = document.createElement('restaurant-item')
    restaurantItem.restaurant = restaurant

    return restaurantItem
  }
}

export default Favorites
