class UnfavoriteButton extends HTMLElement {
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

      .restaurant-heading__unfavorite-btn {
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

      .restaurant-heading__unfavorite-btn:hover {
        background-color: #c4171d;
      }

      .restaurant-heading__unfavorite-btn .icon {
        width: 16px;
        color: #fff;
        margin-right: 4px;
      }
    `
  }

  _untoggleFavoriteButton() {
    this.dispatchEvent(new CustomEvent('untoggleFavoriteButton'))
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
      <button class="restaurant-heading__unfavorite-btn" id="unfavoriteBtn">
        <span><img src="icons/heart-solid.svg" alt="" class="icon"></span>
        Remove from Favorite
      </button>
    `

    const unfavoriteBtn = this._shadowRoot.getElementById('unfavoriteBtn')
    unfavoriteBtn.addEventListener('click', () => this._untoggleFavoriteButton())
  }
}

customElements.define('unfavorite-button', UnfavoriteButton)
