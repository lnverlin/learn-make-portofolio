class Inquiry extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="inquiry">
            <p>
                Every project starts with a discussion
            </p>
            <h3 class="email">inquiry@lumonata.com</h3><hr>
        </div>
    `;
  }
}

customElements.define('inquiry-contact', Inquiry);
