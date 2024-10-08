import API_ENDPOINT from '../../globals/api-endpoint'
import ErrorPopupMessage from '../../utils/error-popup-message'

class FavoritesPresenter {
  constructor({ view, favoriteRestaurantsModel }) {
    this._view = view
    this._favoriteRestaurantsModel = favoriteRestaurantsModel

    this._showFavoriteRestaurants()
  }

  async _showFavoriteRestaurants() {
    try {
      const restaurants = await this._favoriteRestaurantsModel.getAllRestaurants()

      const updatedRestaurants = restaurants.map((restaurant) => {
        return {
          ...restaurant,
          pictureUrl: `${API_ENDPOINT.getRestaurantImage(restaurant.pictureId)}`
        }
      })

      this._view.showFavoriteRestaurants(updatedRestaurants)
    } catch (error) {
      console.error(error)
      ErrorPopupMessage.show('Get favorite restaurants failed')
    }
  }
}

export default FavoritesPresenter