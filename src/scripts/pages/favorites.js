import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import FavoritesPresenter from '../presenters/favorites-presenter'
import FavoritesView from '../views/favorites-view'

const view = new FavoritesView()

const Favorites = {
  async render() {
    return view.getTemplate()
  },

  async afterRender() {
    new FavoritesPresenter({ view, favoriteRestaurantsModel: FavoriteRestaurantIdb })
  }
}

export default Favorites
