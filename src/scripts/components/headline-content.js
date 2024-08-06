class HeadlineContent extends HTMLElement {
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

      .headline {
        margin-top: 32px;
      }

      .headline__figure {
        width: 100%;
      }

      .headline__figure img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 4px;
        width: 100%;
        height: 350px;
      }

      .headline__figure figcaption {
        text-align: center;
        color: #666666;
        font-size: 13px;
        font-weight: 400;
        margin-top: 8px;
      }

      .headline__content {
        width: 100%;
        padding: 16px;
      }

      .headline__title {
        font-size: 24px;
        font-weight: 500;
      }

      .headline__description {
        font-size: 14px;
        margin-top: 12px;
      }

      .headline__button {
        text-transform: uppercase;
        margin-top: 24px;
        cursor: pointer;
        padding: 16px;
        color: white;
        border: none;
        border-radius: 5px;
        background-color: #d61920;
        transition: all 150ms ease-in-out;

        &:hover {
          background-color: #c4171d;
        }
      }

      @media screen and (min-width: 576px) {
        .headline__content {
          margin: 0 auto;
          max-width: 650px;
        }
      }

      @media screen and (min-width: 768px) {
        .headline__content {
          padding: 16px 32px;
        }
      }

      @media screen and (min-width: 992px) {
        .headline {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .headline__description {
          font-size: 16px;
        }
      }
    `
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
      <article class="headline">
        <figure class="headline__figure">
          <img src="images/heros/hero-image_4.jpg" alt="A beautiful plated dish with flowers" />
          <figcaption>A beautiful plated dish with flowers</figcaption>
        </figure>
        <div class="headline__content">
          <h1 class="headline__title"> Craving something Insta-worthy?</h1>
          <p class="headline__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
            facere nostrum officiis qui quidem ratione similique, soluta veniam
            voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
            distinctio ducimus expedita itaque laudantium magnam maiores, nobis
            obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta
            veniam vero vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio
            vero. Laudantium!
          </p>
          <button class="headline__button">Read More</button>
        </div>
      </article>
    `
  }
}

customElements.define('headline-content', HeadlineContent)
