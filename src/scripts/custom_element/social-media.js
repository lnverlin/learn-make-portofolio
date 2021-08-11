class SocialMedia extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="cards__media">
            <ul>
                <li><a href=#>IG</a></li>
                <li><a href=#>FB</a></li>
                <li><a href=#>TW</a></li>
                <li><a href=#>BE</a></li>
            </ul>
        </div>
    `;
  }
}

customElements.define('social-media', SocialMedia);
