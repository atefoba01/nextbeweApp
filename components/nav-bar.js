class Narbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style> 
                .nav {
                    width: calc(100vw - 40px);
                    padding: 20px;
                }
                
                .nav--bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #00102A;
                    padding: 15px 30px;
                }
                
                .logo img {
                    max-width: 250px;
                }
                
                .menu {
                    display: flex;
                    align-items: center;
                }

                .menu a {
                    margin-left: 20px;
                    color: #fff;
                    text-decoration: none;
                    padding: 10px 0px;
                }
                
                .menu a:hover {
                    color: #fff;
                    border-bottom: 2px solid #fff;
                    
                }
                
                .menu a.active {
                    color: #fff;
                    border-bottom: 2px solid #fff;
                }
                
                .menu a.button {
                    margin-left: 20px;
                    background: #E6F1FF;
                    border-radius: 4px;
                    padding: 5px 20px;
                    color: #064DAA;
                    border-bottom: none;
                }

                .menu a.search {
                    border-bottom: none;
                }
                
                .menu a.search img {
                    width: 22px;
                    height: 22px;
                }
                
                .search-mobile {
                    display: none;
                }
                
                .menu-mobile {
                    visibility: hidden;
                    display: flex;
                    opacity: 0;
                    transition: opacity 500ms;
                    flex-direction: column;
                    background-color: #00102A;
                    padding: 25px;
                    position: absolute;
                    width: calc(100% - 70px);
                    -webkit-transition: visibility 0s opacity 0.3s ease-in-out;
                    -o-transition: visibility 0s opacity 0.3s ease-in-out;
                    transition: visibility 0s opacity 0.3s ease-in-out;
                }
                
                .open {
                    opacity: 1;
                    visibility: visible;
                    -webkit-transition: opacity 0s visibility 0.3s ease-in-out;
                    -o-transition: opacity 0s visibility 0.3s ease-in-out;
                    transition: opacity 0s visibility 0.3s ease-in-out;
                }
                
                .menu-mobile a {
                    color: #fff;
                    text-decoration: none;
                    margin-top: 15px;
                }
                .menu-mobile a:nth-child(1) {
                    margin-top: 0px;
                }
                
                .menu-mobile a:hover {
                    color: #064DAA;
                    font-weight: bold;
                }
                
                .menu-mobile a.active {
                    color: #064DAA;
                    font-weight: bold;
                }
                
                .menu-mobile a.button {
                    background: #E6F1FF;
                    border-radius: 4px;
                    padding: 8px 20px;
                    color: #064DAA;
                    align-self: center;
                }
                
                .menu-toggle .bar {
                    width: 25px;
                    height: 3px;
                    background-color: #fff;
                    margin: 5px auto;
                    -webkit-transition: all 0.3s ease-in-out;
                    -o-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                }
                
                .menu-toggle {
                    justify-self: end;
                    display: none;
                }
                
                .menu-toggle:hover {
                    cursor: pointer;
                }
                
                #mobile-menu.is-active .bar:nth-child(2) {
                    opacity: 0;
                }
                
                #mobile-menu.is-active .bar:nth-child(1) {
                    -webkit-transform: translateY(8px) rotate(45deg);
                    -ms-transform: translateY(8px) rotate(45deg);
                    -o-transform: translateY(8px) rotate(45deg);
                    transform: translateY(8px) rotate(45deg);
                }
                
                #mobile-menu.is-active .bar:nth-child(3) {
                    -webkit-transform: translateY(-8px) rotate(-45deg);
                    -ms-transform: translateY(-8px) rotate(-45deg);
                    -o-transform: translateY(-8px) rotate(-45deg);
                    transform: translateY(-8px) rotate(-45deg);
                }
                
                
                @media only screen and (max-width: 815px) {
                    .nav {
                        width: calc(100vw - 20px);
                        padding: 10px
                    }
                    .nav--bar {
                        padding: 10px
                    }
                    .menu {
                    display: none;
                    }
                
                    .search-mobile {
                    display: block;
                    }
            
                    .menu-toggle,
                    .bar {
                        display: block;
                        cursor: pointer;
                    }
                
                    .logo img {
                        max-width: 180px;
                    }
                }
            </style>
            <div class="nav">
                <nav class="nav--bar">
                    <a href="#" class="search-mobile"><img src="assets/images/search.png" alt="LOGO"></a>
                    <div class="logo"><a href="index.html"><img src="assets/images/logo.png" alt="LOGO"></a></div>
                    <div class="menu">
                        <a href="index.html" class="${this.getAttribute('active') === 'home' ? 'active' : ''}">Home</a>
                        <a href="index.html#about" class="${this.getAttribute('active') === 'about' ? 'active' : ''}">About us</a>
                        <a href="career.html" class="${this.getAttribute('active') === 'career' ? 'active' : ''}">Careers</a>
                        <a href="faq.html" class="${this.getAttribute('active') === 'faq' ? 'active' : ''}">FAQs</a>
                        <a href="index.html#contact" class="button">Connect with US</a>
                        <a href="#" class="search"><img src="assets/images/search.png" alt="LOGO"></a>
                    </div>

                    <div class="menu-toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </nav>

                <div class="menu-mobile">
                    <a href="index.html" class="${this.getAttribute('active') === 'home' ? 'active' : ''}">Home</a>
                    <a href="index.html#about" class="${this.getAttribute('active') === 'about' ? 'active' : ''}">About us</a>
                    <a href="career.html" class="${this.getAttribute('active') === 'career' ? 'active' : ''}">Careers</a>
                    <a href="faq.html" class="${this.getAttribute('active') === 'faq' ? 'active' : ''}">FAQs</a>
                    <a href="index.html#contact" class="button">Connect with US</a>
                </div>
            </div>
        `;
    }
}

customElements.define('nav-bar', Narbar);

$('.menu-toggle').click(function () {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
    $(".menu-mobile").toggleClass("open");
});