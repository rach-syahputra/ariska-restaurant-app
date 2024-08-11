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

      this._view.showFavoriteRestaurants(restaurants)
    } catch (error) {
      console.error(error)
      ErrorPopupMessage.show('Get favorite restaurants failed')
    }
  }
}

export default FavoritesPresenter