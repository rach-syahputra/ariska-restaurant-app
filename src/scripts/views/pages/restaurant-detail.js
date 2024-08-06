import RestaurantAPI from '../../../data/restaurant'
import UrlParser from '../../../routes/url-parser'
import FavoriteButtonInitiator from '../../../utils/favorite-button-initiator'
import Loading from '../../../utils/loading'

const RestaurantDetail = {
  async render() {
    return `
      <div class="restaurant-detail" id="restaurantDetail">
        
      </div>
    `
  },

  async afterRender() {
    const restaurantDetail = document.getElementById('restaurantDetail')
    const url = UrlParser.parseActiveUrlWithoutCombiner()

    Loading.show(restaurantDetail)

    try {
      const restaurant = await RestaurantAPI.getDetail(url.id)

      this.initialRestaurantHeading(restaurantDetail, restaurant)
      this.initialRestaurantCategory(restaurant.categories)
      this.initialRestaurantMenus(restaurantDetail, restaurant.menus)
      this.initialCustomerReviews(restaurantDetail, restaurant.customerReviews)
      this.initialAddReview(restaurantDetail, restaurant.id)
    } catch (error) {
      console.error(error)
    }

    Loading.hide(restaurantDetail)
  },

  initialAddReview(container, id) {
    const addReview = document.createElement('add-review')

    addReview.addEventListener('addReview', () => this.onAddReviewHandler(id))

    container.appendChild(addReview)
  },

  initialRestaurantHeading(container, restaurant) {
    const restaurantHeading = document.createElement('restaurant-heading')
    const restaurantHeadingData = {
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      city: restaurant.city,
      address: restaurant.address,
      pictureId: restaurant.pictureId,
      rating: restaurant.rating
    }

    restaurantHeading.restaurant = restaurantHeadingData

    FavoriteButtonInitiator.init({
      restaurantHeading,
      restaurant
    })

    container.appendChild(restaurantHeading)
  },

  initialRestaurantCategory(restaurant) {
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

  initialRestaurantMenus(container, menus) {
    const restaurantMenus = document.createElement('restaurant-menus')
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

    container.appendChild(restaurantMenus)
  },

  initialCustomerReviews(container, reviews) {
    const customerReviews = document.createElement('customer-reviews')
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

    container.appendChild(customerReviews)
  },

  async onAddReviewHandler(id) {
    const addReview = document.querySelector('add-review')

    const customer = {
      id: id,
      name: addReview.shadowRoot.getElementById('name').value,
      review: addReview.shadowRoot.getElementById('review').value
    }

    try {
      await RestaurantAPI.addReview(customer)
    } catch (error) {
      console.error(error)
    }
  }
}

export default RestaurantDetail
