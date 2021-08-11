class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron" id="jumbotron">
            <h2 class="jumbotron__title">We make <red>beautiful</red> <br>and <red>functional</red> design</h2>
            <p class="jumbotron__description">Established in 2007, we are independent<br>
                design and development studio based in Bali.
            </p>
            <div class="circle__background">
                <span class="dot"></span>
                <span class="dot1"></span>
                <span class="dot2"></span>
            </div>
        </div>
      `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
