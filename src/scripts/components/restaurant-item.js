import API_ENDPOINT from '../../globals/api-endpoint'

class RestaurantItem extends HTMLElement {
  _restaurant = {
    id: '',
    name: '',
    description: '',
    pictureId: '',
    city: '',
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
      .restaurant-item {
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
      }

      .restaurant-item__thumbnail {
        position: relative;
        width: 100%;
        height: 240px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 4px;
        }

        .restaurant-item__city {
          position: absolute;
          top: 0;
          padding: 8px 12px;
          font-size: 14px;
          color: #fff;
          background-color: #212529;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }

      .restaurant-item__content {
        display: flex;
        flex-direction: column;
        padding: 16px;
      }

      .restaurant-item__rating {
        font-size: 14px;
      }

      .restaurant-item__name {
        font-size: 18px;

        a {
          text-decoration: none;
          color: #000;
          padding: 12px 0;
        }
      }

      .restaurant-item__description {
        font-size: 14px;
        margin: 0;
      }

      @media screen and (min-width: 768px) {
        .restaurant-item {
          height: 600px;
        }
      }

      @media screen and (min-width: 992px) {
        .restaurant-item {
          height: 730px;
        }

        .restaurant-item__description {
          font-size: 16px;
        }
      }
    `
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
      <div class="restaurant-item">
        <div class="restaurant-item__thumbnail">
          <img src="${API_ENDPOINT.getRestaurantImage(this._restaurant.pictureId)}" alt="gambar">
          <p class="restaurant-item__city">${this._restaurant.city}</p>
        </div>
        <div class="restaurant-item__content">
          <span class="restaurant-item__rating">&#9733; ${this._restaurant.rating}</span>
          <h1 class="restaurant-item__name"><a href="#">${this._restaurant.name}</a></h1>
          <p class="restaurant-item__description">
            ${this._restaurant.description}
          </p>
        </div>
      </div>
    `
  }
}

customElements.define('restaurant-item', RestaurantItem)
