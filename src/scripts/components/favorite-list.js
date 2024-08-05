class FavoriteList extends HTMLElement {
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
      .favorites {
        width: 100%;
        margin: auto;
        text-align: center;
      }

      .favorite-list {
        display: grid;
        gap: 40px;
        grid-template-columns: 1fr;
        text-align: left;
      }

      @media screen and (min-width: 768px) {
        .favorite-list {
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          padding: 16px;
        }
      }

      @media screen and (min-width: 992px) {
        .favorite-list {
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
      <section class="favorites">
        <div class="favorite-list" id="favoriteList">
          <slot></slot>
        </div>
      </section>
    `
  }
}

customElements.define('favorite-list', FavoriteList)
