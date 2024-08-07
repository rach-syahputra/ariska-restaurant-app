import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb'

const FavoriteButtonInitiator = {
  async init({ restaurantHeading, restaurant }) {
    await this.renderButton(restaurantHeading, restaurant)
  },

  async renderButton(restaurantHeading, restaurant) {
    const favoriteButton = document.createElement('favorite-button')
    const unfavoriteButton = document.createElement('unfavorite-button')

    if (await this.isMovieExist(restaurant.id)) {
      const slottedFavoriteButton = restaurantHeading.shadowRoot
        .querySelector('slot')
        .assignedElements()[0]

      if (slottedFavoriteButton) {
        slottedFavoriteButton.remove()
      }

      unfavoriteButton.slot = 'favoriteButton'
      unfavoriteButton.addEventListener('untoggleFavoriteButton', () =>
        this.onUnfavoriteHandler(restaurantHeading, restaurant)
      )

      restaurantHeading.appendChild(unfavoriteButton)
    } else {
      const slottedUnfavoriteButton = restaurantHeading.shadowRoot
        .querySelector('slot')
        .assignedElements()[0]

      if (slottedUnfavoriteButton) {
        slottedUnfavoriteButton.remove()
      }

      favoriteButton.slot = 'favoriteButton'
      favoriteButton.addEventListener('toggleFavoriteButton', () =>
        this.onFavoriteHandler(restaurantHeading, restaurant)
      )

      restaurantHeading.appendChild(favoriteButton)
    }
  },

  async isMovieExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)
    return !!restaurant
  },

  async onFavoriteHandler(restaurantHeading, restaurant) {
    try {
      await FavoriteRestaurantIdb.putRestaurant(restaurant)
      this.renderButton(restaurantHeading, restaurant)
    } catch (error) {
      console.error(error)
    }
  },

  async onUnfavoriteHandler(restaurantHeading, restaurant) {
    try {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
      this.renderButton(restaurantHeading, restaurant)
    } catch (error) {
      console.error(error)
    }
  }
}

export default FavoriteButtonInitiator
