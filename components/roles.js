
const roleTemplate = document.createElement('template');
roleTemplate.innerHTML = `
<style>
.roles {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  
  .roles img {
    width: 75px;
    height: 75px;
    object-fit: contain;
  }
  
  .roles div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .roles span {
    font-size: 15px;
    font-weight: 500;
    margin-top: 10px;
  }

  
@media only screen and (max-width: 1000px) {
    .roles div {
      margin: 25px;
    }
  }
  </style>
    <div class="roles">
        <div>
            <img src="assets/images/roles/310.png" alt="" />
            <span>Ad Operations</span>
        </div>
        <div>
            <img src="assets/images/roles/311.png" alt="" />
            <span>Paralegal</span>
        </div>
        <div>
            <img src="assets/images/roles/312.png" alt="" />
            <span>Customer Support</span>
        </div>
        <div>
            <img src="assets/images/roles/313.png" alt="" />
            <span>Software Development</span>
        </div>
        <div>
            <img src="assets/images/roles/314.png" alt="" />
            <span>QA/QC & Testing</span>
        </div>
        <div>
            <img src="assets/images/roles/315.png" alt="" />
            <span>Data & Business Analyst</span>
        </div>
        <div>
            <img src="assets/images/roles/316.png" alt="" />
            <span>UI/UX</span>
        </div>
        <div>
            <img src="assets/images/roles/317.png" alt="" />
            <span>Web Design</span>
        </div>
    </div>
`;

class Roles extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(roleTemplate.content.cloneNode(true));
    }
}

customElements.define('role-component', Roles);