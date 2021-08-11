class OverlayBtn extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="overlay">
            <button class="btn__images" aria-label="More info">
            <span class="material-icons btn__image">east</span>
            </button>
        </div>
      `;
  }
}

customElements.define('overlay-button', OverlayBtn);
