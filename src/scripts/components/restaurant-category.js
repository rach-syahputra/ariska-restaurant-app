class RestaurantCategory extends HTMLElement {
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

      .restaurant-heading__category {
        display: flex;
        flex-direction: column;
        gap: 12px;
        position: absolute;
        bottom: 24px;
        right: 0;
        text-align: center;

        li {
          padding: 12px 32px;
          font-weight: 500;
          background-color: #212529;
          color: #fff;
          text-transform: uppercase;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }
    `
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
     <ul class="restaurant-heading__category" id="restaurantCategory"></ul>
    `
  }
}

customElements.define('restaurant-category', RestaurantCategory)
