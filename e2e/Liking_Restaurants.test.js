/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorites')
})

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see('No favorite restaurants to display :(', '#noFavorites')
})

Scenario('liking a restaurant', async ({ I }) => {
  I.see('No favorite restaurants to display :(', '#noFavorites')

  I.amOnPage('/')

  I.seeElement('.restaurant-item__name')
  const firstRestaurant = locate('.restaurant-item__name').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('favorite-button')
  I.click('favorite-button')

  I.amOnPage('/#/favorites')
  I.seeElement('.restaurant-item')
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant-item__name')

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName)
})
