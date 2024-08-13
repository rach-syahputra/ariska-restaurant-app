/* eslint-disable no-undef */
const assert = require('assert')

Feature('Unliking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorites')
})

Scenario('unliking restaurant', async ({ I }) => {
  // liking restaurant
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

  // unliking restaurant
  I.click('.restaurant-item__name')

  I.seeElement('unfavorite-button')
  I.click('unfavorite-button')

  I.amOnPage('/#/favorites')
  I.see('No favorite restaurants to display :(', '#noFavorites')
})