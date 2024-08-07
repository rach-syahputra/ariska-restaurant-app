class ErrorPopupMessage extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'message']
  }

  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._style = document.createElement('style')

    this.render()
  }

  set message(value) {
    this._message = value
  }

  get message() {
    return this._message
  }

  set open(value) {
    this._open = value
  }

  get open() {
    return this._open
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

      .popup {
        display: ${this.open ? 'block' : 'none'};
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        text-align: center;
        
      }

      .popup__content {
        color: #58151c;
        background-color: #f8d7da;
        padding: 20px;
        border: 1px solid #f1aeb5;
        border-radius: 4px;
        width: fit-content;
        margin: auto;
      }
    `
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)

    this._shadowRoot.innerHTML += `
     <div class="popup" id="popup">
      <div class="popup__content" id="popupContent">
        ${this.message}
      </div>
      
     </div>
    `
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'open':
        this.open = newValue
        break
      case 'message':
        this.message = newValue
        break
    }

    this.render()
  }
}

customElements.define('error-popup-message', ErrorPopupMessage)
