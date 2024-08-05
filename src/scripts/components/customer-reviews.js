class CustomerReviews extends HTMLElement {
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

      .customer-reviews {
        width: 100%;
        margin-block: 64px;
      }

      .customer-reviews__label {
        font-weight: 100;
        font-size: 28px;
        width: 100%;
        text-align: center;
      }

      .customer-reviews__container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 16px;
        margin: 0 auto;
        width: 100%;
      }

      .customer-review {
        padding: 16px;
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
      }

      .customer-review__name {
        font-size: 16px;
      }

      .customer-review__review {
        padding: 8px 0;
      }

      .customer-review__date {
        font-size: 14px;
        color: #6c757d;
        text-align: right;
      }

      @media screen and (min-width: 768px) {
        .customer-reviews__container {
          width: 768px;
        }
      }

      @media screen and (min-width: 992px) {
        .customer-reviews__container {
          padding: 32px;
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
      <section class="customer-reviews">
        <h1 class="customer-reviews__label">Customer Reviews</h1>
        <div class="customer-reviews__container" id="customerReviews">
          
        </div>
      </section>
    `
  }
}

customElements.define('customer-reviews', CustomerReviews)
