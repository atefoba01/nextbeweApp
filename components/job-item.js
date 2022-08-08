const clientTemplate = document.createElement("template");
clientTemplate.setAttribute("id", "job");
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
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
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
        <button id="click">View more</button>
    </div>
`;

class JobItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(clientTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector("#title").innerText =
      this.getAttribute("title");
    this.shadowRoot.querySelector("#content").innerHTML =
      this.getAttribute("content");

    this.shadowRoot.querySelector("#click").dataset.id =
      this.getAttribute("id");
  }

  connectedCallback() {
    navigate(this);
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    navigate(this);
  }
}

customElements.define("job-item", JobItem);

function navigate(elem) {
  const shadow = elem.shadowRoot;
  const click = shadow?.querySelector("#click");
  // console.log(shadow?.querySelector("#click"));
  click.addEventListener("click", (_event) => {
    window.location = "career-details.html?id=" + click.getAttribute("data-id");
  });
}

window.onload = async (_event) => {
  document.querySelector("#career").innerHTML =
    '<h1 class="title text-center">Loading...</h1>';

  const requestOptions = {
    method: "GET",
  };

  await fetch("https://api.nextbewe.com/api/jobpostings", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      if (result?.data) {
        let careerContent = "";
        result?.data.forEach((element) => {
          careerContent += `
          <job-item 
              id="${element._id}"
              title="${element.jobRole}"
              content="${element.jobDescription}"
          ></job-item>`;
        });

        document.querySelector("#career").innerHTML = careerContent;
      } else {
        document.querySelector(
          "#career"
        ).innerHTML = `<h1 class="title text-center">No jobs...</h1>`;
      }
    })
    .catch((error) => {
      document.querySelector(
        "#career"
      ).innerHTML = `<h1 class="title text-center">Unable to fetch...</h1>`;
    });
};
