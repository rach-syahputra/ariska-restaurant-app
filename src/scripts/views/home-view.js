import { createRestaurantItemTemplate } from '../../templates/template-creator'

class HomeView {
  getTemplate() {
    return `
      <div class="home" id="home">
        <hero-element></hero-element>
        <headline-content></headline-content>
        <article class="restaurant">
          <h1 class="restaurant__label">Explore Restaurants</h1>
          <slot name="loading"></slot>
          <div class="restaurants" id="restaurantList">
          </div>
        </article>
      </div>
    `
  }

  getContainer() {
    return document.getElementById('home')
  }

  showRestaurants(restaurants) {
    let html
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '')
    }

    document.getElementById('restaurantList').innerHTML = html

    this.getContainer().dispatchEvent(new Event('restaurants:updated'))
  }
}

export default HomeView