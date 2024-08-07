const ErrorPopupMessage = {
  show(message) {
    const errorPopupMessage = document.querySelector('error-popup-message')

    errorPopupMessage.setAttribute('open', 'true')
    errorPopupMessage.setAttribute('message', message)

    setTimeout(() => {
      errorPopupMessage.removeAttribute('open')
      errorPopupMessage.removeAttribute('message')
    }, 5000)
  }
}

export default ErrorPopupMessage
