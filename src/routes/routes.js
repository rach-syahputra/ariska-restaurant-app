import Favorites from '../scripts/pages/favorites'
import Home from '../scripts/pages/home'
import RestaurantDetail from '../scripts/pages/restaurant-detail'

const routes = {
  '/': Home,
  '/detail/:id': RestaurantDetail,
  '/favorites': Favorites
}

export default routes
