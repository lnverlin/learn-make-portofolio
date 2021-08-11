class Expertise extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="expertise">
            <h2 class="expertise__title">Expertise</h2>
            <p class="expertise__describe">Web Design & Development <br>
                Web Application<br>
                Indentity Design<br>
                Grapich Design<br>
                Digital Marketing
            </p>
        </div>
        `;
  }
}

customElements.define('fly-expertise', Expertise);
