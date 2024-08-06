class RestaurantList extends HTMLElement {
  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._style = document.createElement('style')

    this.render()
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = ''
  }

  _updateStyle() {
    this._style.textContent = `      
      .restaurant {
        width: 100%;
        margin: 64px auto;
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
        gap: 40px;
        grid-template-columns: 1fr;
        text-align: left;
      }

      @media screen and (min-width: 768px) {
        .restaurants {
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
      }

      @media screen and (min-width: 992px) {
        .restaurants {
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
      }
    `
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
      <article class="restaurant">
        <h1 class="restaurant__label">Explore Restaurants</h1>
        <slot name="loading"></slot>
        <div class="restaurants" id="restaurantList">
          <slot></slot>
        </div>
      </article>
    `
  }
}

customElements.define('restaurant-list', RestaurantList)
