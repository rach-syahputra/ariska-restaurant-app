class HomeView {
  getTemplate() {
    return `
      <div class="home" id="home">
        <hero-element></hero-element>
        <headline-content></headline-content>
      </div>
    `
  }

  getContainer() {
    return document.getElementById('home')
  }

  showRestaurants(restaurants) {
    if (restaurants.length) {
      const restaurantList = document.createElement('restaurant-list')

      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item')
        restaurantItem.restaurant = restaurant
        restaurantList.appendChild(restaurantItem)
      })

      this.getContainer().appendChild(restaurantList)
      this.getContainer().dispatchEvent(new Event('restaurants:updated'))
    }
  }
}

export default HomeView