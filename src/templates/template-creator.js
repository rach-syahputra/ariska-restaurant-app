const createRestaurantItemTemplate = (restaurant) => {
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

export { createRestaurantItemTemplate }