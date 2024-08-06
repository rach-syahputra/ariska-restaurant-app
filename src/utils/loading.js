const Loading = {
  show(container) {
    const loadingSpinner = document.createElement('loading-spinner')
    loadingSpinner.slot = 'loading'

    container.appendChild(loadingSpinner)
  },

  hide(container) {
    const slottedLoadingSpinner = container.shadowRoot
      .querySelector('slot[name="loading"]')
      .assignedElements()[0]

    slottedLoadingSpinner.remove()
  }
}

export default Loading
