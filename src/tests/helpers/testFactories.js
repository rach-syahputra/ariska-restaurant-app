import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator'

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('restaurant-heading'),
    favoriteRestaurantsModel: FavoriteRestaurantIdb,
    restaurant
  })
}

export { createFavoriteButtonPresenterWithRestaurant }