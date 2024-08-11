import RestaurantAPI from '../../data/restaurant'
import HomeView from '../views/home-view'
import HomePresenter from '../presenters/home-presenter'

const view = new HomeView()

const Home = {
  async render() {
    return view.getTemplate()
  },

  async afterRender() {
    new HomePresenter({ view, restaurantModel: RestaurantAPI })
  }
}

export default Home
