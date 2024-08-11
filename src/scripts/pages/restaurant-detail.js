import RestaurantAPI from '../../data/restaurant'
import RestaurantDetailPresenter from '../presenters/restaurant-detail-presenter'
import RestaurantDetailView from '../views/restaurant-detail-view'

const view = new RestaurantDetailView()

const RestaurantDetail = {
  async render() {
    return view.getTemplate()
  },

  async afterRender() {
    new RestaurantDetailPresenter({ view, restaurantModel: RestaurantAPI })
  }
}

export default RestaurantDetail
