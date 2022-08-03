const template = document.createElement('template');
template.innerHTML = `
<style>

.box {  
    background-color: #E5F1FF;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  
  .box-content {
    padding: 10px;
    color: #064DAA;
  }
  
  .box-content h5{
    color: #064DAA;
    font-size: 16px;
  }
  
  .box-content p {
    color: #040404;
    font-size: 12px;
  }
  
  .box-content a{
    color: #064DAA;
    font-size: 12px;
    padding: 7px;
    border: 1px solid #064DAA;
    border-radius: 4px;
  }
  #title {
        margin: 0px
    }
    #sub-title {
        margin: 0px
    }  
</style>

<div class="box">
<img src="assets/images/2642.png" id="image" style="width: 100%" alt="" />
<div class="box-content">
    <h5 id="title"></h6>
        <p id="subtitle"></p>
        <a>
            <span>Read more</span>
            <img src="assets/images/arrow-right.png"
                style="width: 21px; height: 21px;object-fit: contain;" alt="" />
        </a>
</div>
</div>
`

class Box extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('#title').innerText = this.getAttribute('title');
        this.shadowRoot.querySelector('#subtitle').innerHTML = this.getAttribute('subTitle');
        this.shadowRoot.querySelector('#image').src = this.getAttribute('image');
    }
}

customElements.define('box-element', Box);
