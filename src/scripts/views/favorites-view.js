import { createRestaurantItemTemplate } from '../../templates/template-creator'

class FavoritesView {
  getTemplate() {
    return `
      <div class="favorite-list" id="favoriteList">
      </div>
    `
  }

  showFavoriteRestaurants(restaurants) {
    const favoriteList = document.getElementById('favoriteList')
    let html

    if (restaurants.length > 0) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '')

      favoriteList.innerHTML = html
    } else {
      favoriteList.innerHTML = '<p id="noFavorites">No favorite restaurants to display :(<p>'
    }
  }
}

export default FavoritesView