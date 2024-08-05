import Home from '../scripts/views/pages/home'
import RestaurantDetail from '../scripts/views/pages/restaurant-detail'

const routes = {
  '/': Home,
  '/detail/:id': RestaurantDetail
}

export default routes
