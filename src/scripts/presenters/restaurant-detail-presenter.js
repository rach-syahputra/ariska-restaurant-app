import UrlParser from '../../routes/url-parser'
import ErrorPopupMessage from '../../utils/error-popup-message'
import Loading from '../../utils/loading'

class RestaurantDetailPresenter {
  constructor({ view, restaurantModel }) {
    this._view = view
    this._restaurantModel = restaurantModel

    this._showRestaurantDetail()
  }

  async _showRestaurantDetail() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    Loading.show(this._view.getContainer())

    try {
      const restaurant = await this._restaurantModel.getDetail(url.id)

      this._view.showRestaurantDetail(restaurant)
      this._initializeAddReviewListener(restaurant.id)
    } catch (error) {
      console.error(error)
      ErrorPopupMessage.show('Get restaurant detail failed')
    }

    Loading.hide(this._view.getContainer())
  }

  _initializeAddReviewListener(id) {
    this._view.getAddReviewElement().addEventListener('addReview', () => this._onAddReviewHandler(id))
  }

  async _onAddReviewHandler(id) {
    const customer = {
      id,
      name: this._view.getAddReviewName().value,
      review: this._view.getAddReviewBody().value
    }

    if (customer.id && customer.name && customer.review) {
      try {
        await this._restaurantModel.addReview(customer)
      } catch (error) {
        console.error(error)
        ErrorPopupMessage.show('Post review failed')
      }
    }
  }
}

export default RestaurantDetailPresenter