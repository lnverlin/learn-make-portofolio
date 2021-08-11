class NavButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
            <h1 class="logo">LUMONATA</h1>
              <div class="nav__button">
                <button id="menu" class="hamburger" aria-label="Slider navigation menu">
                <span class="material-icons">menu</span>
                </button>
                <button id="message" class="btn__contact" aria-label="Reach Us">
                <span class="material-icons">mail_outline</span>
                </button>
              </div>
        </nav>
      `;
  }
}

customElements.define('nav-button', NavButton);
