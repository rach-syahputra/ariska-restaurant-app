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
        height: 420px;
        text-align: center;
        background-position: center;
      }

      img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
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
      <div class="hero">
        <picture>
          <source media="(max-width: 768px)" srcset="./images/hero-image_2-small.jpg">
          <img src='./images/hero-image_2-large.jpg' alt="hero image">
        </picture>
      </div>
    `
  }
}

customElements.define('hero-element', HeroElement)
