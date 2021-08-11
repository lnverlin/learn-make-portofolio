class ReachUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h3 class="nav__contact">Reach Us</h3>
        <div class="cards__contact">
            <div class="card__contact">
                <p>By appointment only</p>
                <p>Jalan Raya Kuta, Gang Cempaka I</p>
                <p>Kuta, Bali 80361 / Google Maps
                    <sup><span class="material-icons rotate-45 map__arrow">arrow_upward</span></sup>
                </p>
                <p>Phone: +62 823 4176 934</p>
                <p>Email: inquiery@lumonata.com</p>
            </div>
        </div>
      `;
  }
}

customElements.define('reach-us', ReachUs);
