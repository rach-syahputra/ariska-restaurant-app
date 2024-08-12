import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb'
import * as TestFactories from './helpers/testFactories'

describe('Liking A Restaurant', () => {
  const addRestaurantHeading = () => {
    document.body.innerHTML = '<div class="restaurant-detail" id="restaurantDetail"></div>'

    document.getElementById('restaurantDetail').appendChild(document.createElement('restaurant-heading'))
  }

  beforeEach(() => {
    addRestaurantHeading()
  })

  it('should show the favorite button when the restaurant has not been added to favorite before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1})

    expect(document.querySelector('favorite-button')).toBeTruthy()
  })

  it('should not show the unfavorite button when the restaurant has not been added to favorite before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1})

    expect(document.querySelector('unfavorite-button')).toBeFalsy()
  })

  it('should be able to like the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1})

    document.querySelector('favorite-button').dispatchEvent(new Event('toggleFavoriteButton'))

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)
    expect(restaurant).toEqual({ id: 1 })

    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant to favorite when its already liked', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1})

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })

    document.querySelector('favorite-button').dispatchEvent(new Event('toggleFavoriteButton'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }])

    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })
})