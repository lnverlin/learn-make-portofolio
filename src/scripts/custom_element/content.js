class ContentElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="title__content">
            <p>OUR WORK</p>
        </div>
        <div class="contents__cards">
            <article class="almare__card" id="almare">
                <div class="image__container">
                    <img src="/src/images/almare-pack1-1464147272.jpeg" alt="Almare product" class="images">
                    <overlay-button></overlay-button>
                </div>
                <h3 class="subtitle">IDENTITY DESIGN</h3>
                <h4 class="product__title">Almare</h4>
            </article>
            <article class="sunset__card" id="sunset">
                <div class="image__container">
                    <img src="/src/images/sunset-01-1448346952.png" alt="Sunset product" class="images">
                    <overlay-button></overlay-button>
                </div>
                <h3 class="subtitle">IDENTITY DESIGN</h3>
                <h4 class="product__title">Sunset</h4>
            </article>
            <article class="dbd__card" id="dbd">
                <div class="image__container">
                    <img src="/src/images/business-card-1445995946.jpeg" alt="DBD product" class="images">
                    <overlay-button></overlay-button>
                </div>
                <h3 class="subtitle">IDENTITY DESIGN</h3>
                <h4 class="product__title">DBD</h4>
            </article>
            <article class="piroz__card" id="piroz">
                <div class="image__container">
                    <img src="/src/images/lumo-port-18-1520394365.jpeg" alt="piroz product" class="images">
                    <overlay-button></overlay-button>
                </div>
                <h3 class="subtitle">IDENTITY DESIGN</h3>
                <h4 class="product__title">PÎROZ</h4>
            </article>
            <article class="kaffehuset__card" id="kaffehuset">
                <div class="image__container">
                    <img src="/src/images/kaffehuset-black-coffee-bag-1445996768.jpeg" alt="Kaffehuset product" class="images">
                    <overlay-button></overlay-button>
                </div>
                <h3 class="subtitle">IDENTITY DESIGN</h3>
                <h4 class="product__title">Kaffehuset</h4>
            </article>
            <article class="elchiringuito__card" id="elchringuito">
                <div class="image__container">
                    <img src="/src/images/el-chiringuito-bcard-1448614490.jpeg" alt="El Chiringuito product" class="images">
                    <overlay-button></overlay-button>
                </div>
                <h3 class="subtitle">IDENTITY DESIGN</h3>
                <h4 class="product__title">El Chiringuito</h4>
            </article>
            <div class="full__content" id="content__btn">
                <button class="full_portofolio" aria-label="See full portofolio">See full portofolio</button>
            </div>
        </div>
        
        <div class="to-left">
            <inquiry-contact></inquiry-contact>
        </div>
      `;
  }
}

customElements.define('content-element', ContentElement);
