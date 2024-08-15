/* eslint-disable no-undef */
Feature('Adding Review')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('adding review to a restaurant', ({ I }) => {
  I.seeElement('.restaurant-item__name')

  const firstRestaurant = locate('.restaurant-item__name').first()

  I.click(firstRestaurant)

  I.seeElement('input#name')
  I.seeElement('textarea#review')

  const nameValue = 'Ariska'
  const reviewValue = 'Suka banget sama minumannya!'
  I.fillField('name', nameValue)
  I.fillField('review', reviewValue)

  I.click('#addReviewBtn')

  I.wait(5)
  I.refreshPage()

  I.see(reviewValue, '.customer-review__review')
})