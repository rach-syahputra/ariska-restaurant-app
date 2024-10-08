import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator'

class RestaurantDetailView {
  getTemplate() {
    return `
      <div class="restaurant-detail" id="restaurantDetail">
      </div>
    `
  }

  getContainer() {
    return document.getElementById('restaurantDetail')
  }

  showRestaurantDetail(restaurant) {
    this._showRestaurantHeading(restaurant)
    this._showRestaurantCategory(restaurant.categories)
    this._showRestaurantMenus(restaurant.menus)
    this._showCustomerReviews(restaurant.customerReviews)
    this._showAddReview()
  }

  _showRestaurantHeading(restaurant) {
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
      favoriteButtonContainer: restaurantHeading,
      favoriteRestaurantsModel: FavoriteRestaurantIdb,
      restaurant
    })

    this.getContainer().appendChild(restaurantHeading)
  }

  _showRestaurantCategory(categories) {
    const restaurantHeading = document.querySelector('restaurant-heading')
    const restaurantCategory = document.createElement('restaurant-category')

    categories.forEach((category) => {
      const li = document.createElement('li')
      li.innerText = category.name
      restaurantCategory.shadowRoot.querySelector('#restaurantCategory').appendChild(li)

      restaurantCategory.slot = 'category'
      restaurantHeading.appendChild(restaurantCategory)
    })
  }

  _showRestaurantMenus(menus) {
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

    this.getContainer().appendChild(restaurantMenus)
  }

  _showCustomerReviews(reviews) {
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

    this.getContainer().appendChild(customerReviews)
  }

  _showAddReview() {
    const addReviewForm = document.createElement('form')
    addReviewForm.classList.add('add-review')
    addReviewForm.id = 'addReview'
    addReviewForm.innerHTML = `
      <h1 class="add-review__label">Add Review</h1>
      <div class="add-review__input-group">
        <label for="name">Name</label>
        <input id="name" name="name" required></input>
      </div>
      
      <div class="add-review__input-group">
        <label for="review">Review</label>
        <textarea id="review" name="review" rows="3" required></textarea>
      </div>
      <button class="add-review__btn" id="addReviewBtn">
        Post review
      </button>
    `

    this.getContainer().appendChild(addReviewForm)
  }

  getAddReviewButtonElement() {
    return document.querySelector('#addReviewBtn')
  }

  getAddReviewName() {
    const addReview = document.querySelector('#addReview')

    return addReview.querySelector('#name')
  }

  getAddReviewBody() {
    const addReview = document.querySelector('#addReview')

    return addReview.querySelector('#review')
  }
}

export default RestaurantDetailView