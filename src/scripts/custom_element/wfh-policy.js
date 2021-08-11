class NewPolicy extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card__contact">
        <p>During Work From Home policy<br>please contact us through:<br>Phone: +62 823 4176 934</p>
      </div
        `;
  }
}

customElements.define('wfh-policy', NewPolicy);
