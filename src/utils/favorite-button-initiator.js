import ErrorPopupMessage from '../utils/error-popup-message'

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, favoriteRestaurantsModel, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer
    this._favoriteRestaurantsModel = favoriteRestaurantsModel
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton() {
    const favoriteButton = document.createElement('favorite-button')
    const unfavoriteButton = document.createElement('unfavorite-button')

    if (await this._isMovieExist(this._restaurant.id)) {
      const slottedFavoriteButton = this._favoriteButtonContainer.querySelector('favorite-button')

      if (slottedFavoriteButton) {
        slottedFavoriteButton.remove()
      }

      unfavoriteButton.slot = 'favoriteButton'
      unfavoriteButton.addEventListener('untoggleFavoriteButton', () =>
        this._onUnfavoriteHandler()
      )

      this._favoriteButtonContainer.appendChild(unfavoriteButton)
    } else {
      const slottedUnfavoriteButton = this._favoriteButtonContainer.querySelector('unfavorite-button')

      if (slottedUnfavoriteButton) {
        slottedUnfavoriteButton.remove()
      }

      favoriteButton.slot = 'favoriteButton'
      favoriteButton.addEventListener('toggleFavoriteButton', () =>
        this._onFavoriteHandler()
      )

      this._favoriteButtonContainer.appendChild(favoriteButton)
    }
  },

  async _isMovieExist(id) {
    const restaurant = await this._favoriteRestaurantsModel.getRestaurant(id)
    return !!restaurant
  },

  async _onFavoriteHandler() {
    try {
      await this._favoriteRestaurantsModel.putRestaurant(this._restaurant)
      this._renderButton()
    } catch (error) {
      console.error(error)
      ErrorPopupMessage.show('Add to favorite failed')
    }
  },

  async _onUnfavoriteHandler() {
    try {
      await this._favoriteRestaurantsModel.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    } catch (error) {
      console.error(error)
      ErrorPopupMessage.show('Remove from favorite failed')
    }
  }
}

export default FavoriteButtonInitiator
