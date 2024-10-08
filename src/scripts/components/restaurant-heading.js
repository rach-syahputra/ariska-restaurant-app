import API_ENDPOINT from '../../globals/api-endpoint'

class RestaurantHeading extends HTMLElement {
  _restaurant = {
    name: '',
    description: '',
    city: '',
    address: '',
    pictureId: '',
    rating: ''
  }

  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._style = document.createElement('style')

    this.render()
  }

  set restaurant(value) {
    this._restaurant = value

    this.render()
  }

  get restaurant() {
    return this._restaurant
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = ''
  }

  _updateStyle() {
    this._style.textContent = ` 
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }     

      .restaurant-heading {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 16px;
      }

      .restaurant-heading__body {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 8px;
      }

      .restaurant-heading__rating {
        font-weight: bold;
      }

      .restaurant-heading__location {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: bold;
      }

      .restaurant-heading__image {
        width: 100%;
        height: 100%;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 4px;
        }
      }

      @media screen and (min-width: 768px) {
        .restaurant-heading {
          grid-template-columns: 1fr 1fr;
        }
      }
    `
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
      <article class="restaurant-heading">
        <div class="restaurant-heading__body">
          <span class="restaurant-heading__rating">&#9733; ${this._restaurant.rating}</span>
          <h2 class="restaurant-heading__name">${this._restaurant.name}</h2>
          <p class="restaurant-heading__description">
            ${this._restaurant.description}
          </p>
          <div class="restaurant-heading__location">
            <img src="icons/location.svg" width="16" alt="">
            <p class="restaurant-heading__address">
              ${this._restaurant.city}, ${this._restaurant.address}
            </p>
          </div>
          <slot name="favoriteButton"></slot>
        </div>
        <div class="restaurant-heading__image">
          <img src="${API_ENDPOINT.getRestaurantImage(this._restaurant.pictureId)}" alt="">
          <slot name="category"></slot>
        </div>
      </article>
    `
  }
}

customElements.define('restaurant-heading', RestaurantHeading)
