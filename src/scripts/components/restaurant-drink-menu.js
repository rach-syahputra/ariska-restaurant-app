class RestaurantDrinkMenu extends HTMLElement {
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
      * {
        box-sizing: border-box;
        margin: 0;
      }

      .restaurant-drink {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        margin-top: 32px;
        padding: 16px;
      }
      
      .restaurant-drink__label {
        font-weight: 100;
        font-size: 24px;
        width: 250px;
        text-align: center;
      }

      .restaurant-drink__label::after {
        content: '';
        margin-top: 16px;
        display: block;
        border-bottom: 1px solid #d3d3d3;
      }

      .restaurant-drink__list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-inline-start: 0;
        gap: 16px;

        li {
          list-style-type: none;
          font-size: 18px;
        }
      }
    `
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
    <article class="restaurant-drink">
      <h1 class="restaurant-drink__label">DRINK</h1>
      <ul class="restaurant-drink__list" id="drinkList">
      </ul>
    </article>
    `
  }
}

customElements.define('restaurant-drink-menu', RestaurantDrinkMenu)
