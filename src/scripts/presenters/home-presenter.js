import ErrorPopupMessage from '../../utils/error-popup-message'
import Loading from '../../utils/loading'

class HomePresenter {
  constructor({ view, restaurantModel }) {
    this._view = view
    this._restaurantModel = restaurantModel

    this._showRestaurants()
  }

  async _showRestaurants() {
    Loading.show(this._view.getContainer())

    try {
      const restaurants = await this._restaurantModel.getList()

      this._displayRestaurants(restaurants)
    } catch (error) {
      console.error(error)
      ErrorPopupMessage.show('Get restaurant list failed')
    }

    Loading.hide(this._view.getContainer())
  }

  _displayRestaurants(restaurants) {
    this._view.showRestaurants(restaurants)
  }
}

export default HomePresenter