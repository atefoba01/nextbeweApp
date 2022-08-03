
const clientTemplate = document.createElement('template');
clientTemplate.setAttribute('id', 'client');
clientTemplate.innerHTML = `
<style>
.roles {
    flex-direction: row;
    display: flex;
  }
  
  .roles img {
    width: calc(20% - 50px);
    height: 130px;
    object-fit: contain;
    margin: 0px 25px;
  }
@media only screen and (max-width: 1000px) {
    .roles img {
        width: calc(50% - 50px);
      }
  }
  </style>
    <div class="roles">
        <img src="assets/images/clients/1.png" alt="" />
        <img src="assets/images/clients/2.png" alt="" />
        <img src="assets/images/clients/3.png" alt="" />
        <img src="assets/images/clients/4.png" alt="" />
        <img src="assets/images/clients/5.png" alt="" />
    </div>
`;

class Clients extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(clientTemplate.content.cloneNode(true));
    }
}

customElements.define('clients-component', Clients);