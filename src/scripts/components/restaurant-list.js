class RestaurantList extends HTMLElement {
  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._style = document.createElement('style')

    this.render()
  }

  _emptyContent() {
    this.innerHTML = ''
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }
      
      .restaurant {
        width: 100%;
        margin: 32px auto;
        text-align: center;
      }

      .restaurant__label {
        font-size: 32px;
        font-weight: 100;
      }

      .restaurant__label::after {
        content: '';
        margin-top: 16px;
        display: block;
        border-bottom: 1px solid #eeeeee;
      }

      .restaurants {
        display: grid;
        gap: 32px;
        grid-template-columns: 1fr;
        margin: 32px auto auto;
        text-align: left;
      }

      @media screen and (min-width: 768px) {
        .restaurants {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media screen and (min-width: 992px) {
        .restaurants {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
      <div class="restaurant">
        <h1 class="restaurant__label">Explore Restaurants</h1>
        <div class="restaurants" id="restaurantList">
          <slot></slot>
        </div>
      </div>
    `
  }
}

customElements.define('restaurant-list', RestaurantList)
