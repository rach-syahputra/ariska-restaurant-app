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

  _btnicon = 'heart-regular.svg'
  _btntext = 'Add to Favorite'

  static get observedAttributes() {
    return ['btnicon', 'btntext']
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

  set btnicon(value) {
    this._btnicon = value
  }

  get btnicon() {
    return this._btnicon
  }

  set btntext(value) {
    this._btntext = value
  }

  get btntext() {
    return this._btntext
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

      .restaurant-heading__favorite-btn {
        background-color: #d61920;
        padding: 16px 24px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        width: fit-content;
        cursor: pointer;
        transition: all 150ms ease-in-out;
      }

      .restaurant-heading__favorite-btn:hover {
        background-color: #c4171d;
      }

      .restaurant-heading__favorite-btn .icon {
        width: 16px;
        color: #fff;
        margin-right: 4px;
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
          <button class="restaurant-heading__favorite-btn">
            <span><img src="icons/${this._btnicon}" alt="" class="icon"></span>
            ${this._btntext}
          </button>
        </div>
        <div class="restaurant-heading__image">
          <img src="${API_ENDPOINT.getRestaurantImage(this._restaurant.pictureId)}" alt="">
          <slot name="category"></slot>
        </div>
      </article>
    `
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'btnicon':
        this.btnicon = newValue
        break
      case 'btntext':
        this.btntext = newValue
        break
    }

    this.render()
  }
}

customElements.define('restaurant-heading', RestaurantHeading)
