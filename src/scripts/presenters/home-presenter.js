import API_ENDPOINT from '../../globals/api-endpoint'
import ErrorPopupMessage from '../../utils/error-popup-message'
import Loading from '../../utils/loading'

class HomePresenter {
  constructor({ view, restaurantModel }) {
    this._view = view
    this._restaurantModel = restaurantModel

    this._showRestaurants()
  }

  async _showRestaurants() {
    // this._view.showLoading()

    try {
      const restaurants = await this._restaurantModel.getList()

      const updatedRestaurants = restaurants.map((restaurant) => {
        return {
          ...restaurant,
          pictureUrl: `${API_ENDPOINT.getRestaurantImage(restaurant.pictureId)}`
        }
      })

      this._view.showRestaurants(updatedRestaurants)
    } catch (error) {
      console.error(error)
      ErrorPopupMessage.show('Get restaurant list failed')
    }
  }
}

export default HomePresenter