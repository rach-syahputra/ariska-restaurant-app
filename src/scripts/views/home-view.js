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
      html = restaurants.reduce((carry, restaurant) => carry.concat(this.createRestaurantItemTemplate(restaurant)), '')
    }

    document.getElementById('restaurantList').innerHTML = html

    this.getContainer().dispatchEvent(new Event('restaurants:updated'))
  }

  createRestaurantItemTemplate(restaurant) {
    return `
      <div class="restaurant-item">
        <div class="restaurant-item__thumbnail">
          <img src="${restaurant.pictureUrl}" alt="gambar">
          <p class="restaurant-item__city">${restaurant.city}</p>
        </div>
        <div class="restaurant-item__content">
          <span class="restaurant-item__rating">&#9733; ${restaurant.rating}</span>
          <a
            href="/#/detail/${restaurant.id}"
            class="restaurant-item__name">
              ${restaurant.name}
          </a>
          <p class="restaurant-item__description">
            ${restaurant.description}
          </p>
        </div>
      </div>
    `
  }
}

export default HomeView