import * as TestFactories from './helpers/testFactories'

describe('Liking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<favorite-button></favorite-button>'
  }

  beforeEach(() => {
    addFavoriteButtonContainer()
  })

  it('should show the favorite button when the restaurant has not been added to favorite before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1})

    expect(document.querySelector('favorite-button')).toBeTruthy()
  })

  it('should not show the unfavorite button when the restaurant has not been added to favorite before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1})

    expect(document.querySelector('unfavorite-button')).toBeFalsy()
  })
})