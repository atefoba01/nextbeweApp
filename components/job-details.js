const clientTemplate = document.createElement("template");
clientTemplate.setAttribute("id", "details");
clientTemplate.innerHTML = `
    <style>
    .item {
        margin: 0 0 30px 0;
        padding: 0;
        border-bottom: 1px solid #bbbdbf;
        padding-bottom: 30px;
      }
      
      .item .title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #064daa;
      }
      
      .item .content {
        font-family: "Roboto";
        font-style: normal;
        overflow: hidden;
        margin-bottom: 10px;
      }
      .item button {
        background: #E6F1FF;
        border-radius: 4px;
        padding: 5px 20px;
        color: #064DAA;
        border: none;
        outline: none;
      }
    </style>
    <div class="item">
        <h1 id="title" class="title"></h1>
        <div id="content" class="content">  
            
        </div>
        <button id="click">Apply</button>
    </div>
`;

class JobDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(clientTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector("#title").innerText =
      this.getAttribute("title");
    this.shadowRoot.querySelector("#content").innerHTML =
      this.getAttribute("content");
  }

  connectedCallback() {
    navigate(this);
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    navigate(this);
  }
}

customElements.define("job-details", JobDetails);

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function navigate(elem) {
  const shadow = elem.shadowRoot;
  const click = shadow?.querySelector("#click");

  click.addEventListener("click", (_event) => {
    modal.style.display = "block";
  });
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

window.onload = async (_event) => {
  document.querySelector("#career-details").innerHTML =
    '<h1 class="title text-center">Loading...</h1>';

  const requestOptions = {
    method: "GET",
  };

  await fetch("http://localhost:3000/api/singlejob?postId=" + getUrlParameter('id'), requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result?.data) {
        const element = result?.data;
        let careerContent = "";
          careerContent += `
          <job-details
              title="${element.jobRole}"
              content="${element.jobDescription}"
          ></job-details>`;
        document.querySelector("#career-details").innerHTML = careerContent;
      } else {
        document.querySelector(
          "#career-details"
        ).innerHTML = `<h1 class="title text-center">No jobs...</h1>`;
      }
    })
    .catch((error) => {
      document.querySelector(
        "#career-details"
      ).innerHTML = `<h1 class="title text-center">Unable to fetch...</h1>`;
    });
};
