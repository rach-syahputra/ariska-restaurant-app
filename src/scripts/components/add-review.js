class AddReview extends HTMLElement {
  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._style = document.createElement('style')

    this.render()
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = ''
  }

  // disconnectedCallback() {
  //   const addReviewBtn = this._shadowRoot.getElementById('addReviewBtn')
  //   addReviewBtn.removeEventListener('click', (event) => this._addReview(event))
  // }

  _updateStyle() {
    this._style.textContent = ` 
      * {
        box-sizing: border-box;
        margin: 0;
      }     

      .add-review {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 16px;
        margin: 0 auto;
        width: 100%;
      }

      .add-review__label {
        font-weight: 100;
        font-size: 28px;
        width: 100%;
        text-align: center;
      }

      .add-review__input-group {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .add-review label {
        font-weight: bold;
      }

      #name,
      #review {
        padding: 8px;
        font-size: 16px;
      }

      .add-review__btn {
        width: fit-content;
        align-self: flex-end;
        background-color: #212529;
        color: #fff;
        padding: 16px;
        border-radius: 4px;
        border: none; 
        cursor: pointer;
        transition: all 150ms ease-in-out;
      }

      .add-review__btn:hover {
        background-color: #30353b;
      }

      @media screen and (min-width: 768px) {
        .customer-reviews__container {
          width: 768px;
        }

        .add-review {
          width: 768px;
        }
      }

      @media screen and (min-width: 992px) {
        .customer-reviews__container {
          padding: 32px;
          gap: 32px;
        }

        .add-review {
          padding: 32px;
        }
      }
    `
  }

  _addReview() {
    this.dispatchEvent(new CustomEvent('addReview'))
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
      <form class="add-review">
        <h1 class="add-review__label">Add Review</h1>
        <div class="add-review__input-group">
          <label for="name">Name</label>
          <input id="name" name="name" required></input>
        </div>
        
        <div class="add-review__input-group">
          <label for="review">Review</label>
          <textarea id="review" name="review" rows="3" required></textarea>
        </div>
        <button class="add-review__btn" id="addReviewBtn">
          Post review
        </button>
      </form>
    `

    const addReviewBtn = this._shadowRoot.getElementById('addReviewBtn')
    addReviewBtn.addEventListener('click', () => this._addReview())
  }
}

customElements.define('add-review', AddReview)
