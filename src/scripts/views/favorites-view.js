class FavoritesView {
  getTemplate() {
    return `
      <favorite-list></favorite-list>
    `
  }

  showFavoriteRestaurants(restaurants) {
    const favoriteList = document.querySelector('favorite-list')

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item')
        restaurantItem.restaurant = restaurant

        favoriteList.appendChild(restaurantItem)
      })
    } else {
      favoriteList.innerHTML = 'No favorite restaurants to display :('
    }
  }
}

export default FavoritesView