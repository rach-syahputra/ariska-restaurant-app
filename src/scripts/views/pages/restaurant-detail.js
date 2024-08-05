import RestaurantAPI from '../../../data/restaurant'
import UrlParser from '../../../routes/url-parser'

const RestaurantDetail = {
  async render() {
    return `
      <restaurant-heading></restaurant-heading>
      <restaurant-menus></restaurant-menus>
      <customer-reviews></customer-reviews>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantAPI.getDetail(url.id)

    this.populateDataToRestaurantHeading(restaurant)
    this.populateDataToRestaurantCategory(restaurant.categories)
    this.populateDataToRestaurantMenus(restaurant.menus)
    this.populateDataToCustomerReviews(restaurant.customerReviews)
  },

  populateDataToRestaurantHeading(restaurant) {
    const restaurantHeading = document.querySelector('restaurant-heading')
    const restaurantHeadingData = {
      name: restaurant.name,
      description: restaurant.description,
      city: restaurant.city,
      address: restaurant.address,
      pictureId: restaurant.pictureId,
      rating: restaurant.rating
    }

    restaurantHeading.restaurant = restaurantHeadingData
  },

  populateDataToRestaurantCategory(restaurant) {
    const restaurantCategory = document.createElement('restaurant-category')
    const restaurantHeading = document.querySelector('restaurant-heading')

    restaurant.forEach((category) => {
      const li = document.createElement('li')
      li.innerText = category.name
      restaurantCategory.shadowRoot.querySelector('#restaurantCategory').appendChild(li)

      restaurantCategory.slot = 'category'
      restaurantHeading.appendChild(restaurantCategory)
    })
  },

  populateDataToRestaurantMenus(menus) {
    const restaurantMenus = document.querySelector('restaurant-menus')
    const restaurantFoodMenu = restaurantMenus.shadowRoot.querySelector('restaurant-food-menu')
    const restaurantFoodList = restaurantFoodMenu.shadowRoot.getElementById('foodList')
    const restaurantDrinkMenu = restaurantMenus.shadowRoot.querySelector('restaurant-drink-menu')
    const restaurantDrinkList = restaurantDrinkMenu.shadowRoot.getElementById('drinkList')

    menus.foods.forEach((menu) => {
      const li = document.createElement('li')
      li.innerText = menu.name

      restaurantFoodList.appendChild(li)
    })

    menus.drinks.forEach((menu) => {
      const li = document.createElement('li')
      li.innerText = menu.name

      restaurantDrinkList.appendChild(li)
    })
  },

  populateDataToCustomerReviews(reviews) {
    const customerReviews = document.querySelector('customer-reviews')
    const customerReviewsContainer = customerReviews.shadowRoot.getElementById('customerReviews')

    reviews.forEach((review) => {
      const customerReview = document.createElement('article')
      customerReview.classList.add('customer-review')

      const name = document.createElement('h2')
      name.classList.add('customer-review__name')
      name.innerText = review.name

      const reviewBody = document.createElement('p')
      reviewBody.classList.add('customer-review__review')
      reviewBody.innerText = review.review

      const date = document.createElement('p')
      date.classList.add('customer-review__date')
      date.innerText = review.date

      customerReview.appendChild(name)
      customerReview.appendChild(reviewBody)
      customerReview.appendChild(date)

      customerReviewsContainer.appendChild(customerReview)
    })
  }
}

export default RestaurantDetail
