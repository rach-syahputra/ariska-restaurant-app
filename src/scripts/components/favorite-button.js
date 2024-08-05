class FavoriteButton extends HTMLElement {
  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._style = document.createElement('style')

    this.render()
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = ''
  }

  disconnectedCallback() {
    const favoriteBtn = this._shadowRoot.getElementById('favoriteBtn')
    favoriteBtn.removeEventListener('click', (event) => this._toggleFavoriteButton(event))
  }

  _updateStyle() {
    this._style.textContent = ` 
      * {
        box-sizing: border-box;
        margin: 0;
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
    `
  }

  _toggleFavoriteButton() {
    this.dispatchEvent(new CustomEvent('toggleFavoriteButton'))
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
      <button class="restaurant-heading__favorite-btn" id="favoriteBtn">
        <span><img src="icons/heart-regular.svg" alt="" class="icon"></span>
        Add to Favorite
      </button>
    `

    const favoriteBtn = this._shadowRoot.getElementById('favoriteBtn')
    favoriteBtn.addEventListener('click', () => this._toggleFavoriteButton())
  }
}

customElements.define('favorite-button', FavoriteButton)
