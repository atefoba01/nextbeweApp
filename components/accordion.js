const accordionTemplate = document.createElement("template");
accordionTemplate.setAttribute("id", "accordionTemplate");
accordionTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
<style>

.accordion {
  background: #E5F1FF;
  border-radius: 4px;
  padding: 20px;
  cursor: pointer;
  margin: 10px;
}

.accordion em {
  font-size: 16px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  margin-right: 10px;
}

.accordion.is-active em {
  color: #064DAA;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

.accordion .accordion-content {
  margin-left: 21px;
  padding-top: 15px;
  display: none;
  -webkit-transition: display 0.5s linear;
  -o-transition: display 0.5s linear;
  transition: display 0.5s linear;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #040404;
}

.accordion.is-active .accordion-content {
  display: block;
  height: auto;
}

.accordion-title {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #064DAA;
  display: flex;
  align-items: center;
}
  </style>

  <div class="accordion">
      <div class="accordion-title">
          <em class="fa-solid fa-caret-up"></em>
          <div id="title">title</div>
      </div>
      <div class="accordion-content" id="content">content</div>
  </div>
   
`;

class Accordion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(accordionTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector("#title").innerText =
      this.getAttribute("title");
    this.shadowRoot.querySelector("#content").innerHTML =
      this.getAttribute("content");
  }

  connectedCallback() {
    toggleSwitch(this);
  }
}

customElements.define("accordion-component", Accordion);

function toggleSwitch(elem) {
  const shadow = elem.shadowRoot;
  shadow.addEventListener("click", (_event) => {
    shadow?.childNodes?.[5]?.classList?.toggle("is-active");
  });
}
