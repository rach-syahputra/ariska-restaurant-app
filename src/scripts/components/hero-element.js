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
        height: fit-content;
        max-height: 420px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transform: scale(1.1);
      }

      .hero__tagline {
        position: absolute;
        left: 0;
        bottom: 8px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        z-index: 3;
        color: #fff;
        font-weight: 500;
      }

      .hero__tagline__top {
        font-size: 16px;
        text-align: left;
      }

      .hero__tagline__bottom {
        width: fit-content;
        font-size: 16px;
        padding: 8px 16px;
        background-color: #d61920;
      }
      
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba(0,0,0,0.4);
      }

      @media screen and (min-width: 768px) {
        .hero__tagline {
          padding: 32px;
        }

        .hero__tagline__top {
          font-size: 24px;
        }

        .hero__tagline__bottom {
          padding: 12px 24px;
        }
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

        <div class="overlay"></div>

        <div class="hero__tagline">
          <p class="hero__tagline__top">Authentic flavors and unforgettable experiences</p>
          <div class="hero__tagline__bottom">
            Good food, good mood
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('hero-element', HeroElement)
