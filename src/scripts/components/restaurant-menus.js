class RestaurantMenus extends HTMLElement {
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

      .menus {
        margin-block: 64px;
      }

      .menus__label {
        font-weight: 100;
        font-size: 28px;
        width: 100%;
        text-align: center;
      }

      .menus__list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
      }

      @media screen and (min-width: 768px) {
        .menus__list {
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
    <section class="menus">
      <h1 class="menus__label">Explore Menus</h1>
      <div class="menus__list">
        <restaurant-food-menu></restaurant-food-menu>
        <restaurant-drink-menu></restaurant-drink-menu>
      </div>
    </section>
    `
  }
}

customElements.define('restaurant-menus', RestaurantMenus)
