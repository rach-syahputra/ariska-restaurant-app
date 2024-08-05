import Favorites from '../scripts/views/pages/favorites'
import Home from '../scripts/views/pages/home'
import RestaurantDetail from '../scripts/views/pages/restaurant-detail'

const routes = {
  '/': Home,
  '/detail/:id': RestaurantDetail,
  '/favorites': Favorites
}

export default routes
