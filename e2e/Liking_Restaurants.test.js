/* eslint-disable no-undef */
// const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorites')
})

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see('No favorite restaurants to display :(', '#noFavorites')
})
