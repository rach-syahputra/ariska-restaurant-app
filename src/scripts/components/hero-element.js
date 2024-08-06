class HeroElement extends HTMLElement {
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

      .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 100%;
        min-height: 420px;
        text-align: center;
        background-image: url('images/heros/hero-image_2.jpg');
        background-position: center;
      }

      @media screen and (min-width: 1200px) {
        .hero {
          max-width: 1200px;
        }
      }
    `
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
      <div class="hero"></div>
    `
  }
}

customElements.define('hero-element', HeroElement)
