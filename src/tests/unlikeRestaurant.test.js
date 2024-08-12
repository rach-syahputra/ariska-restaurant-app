import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb'
import * as TestFactories from './helpers/testFactories'

describe('Unliking A Restaurant', () => {
  const addRestaurantHeading = () => {
    document.body.innerHTML = '<div class="restaurant-detail" id="restaurantDetail"></div>'

    document.getElementById('restaurantDetail').appendChild(document.createElement('restaurant-heading'))
  }

  beforeEach(async () => {
    addRestaurantHeading()
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should display unfavorite button for favorited restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1})

    expect(document.querySelector('unfavorite-button')).toBeTruthy()
  })
})